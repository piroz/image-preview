<?php

error_reporting(E_ALL);
date_default_timezone_set('Asia/Tokyo');
mb_language('ja');
setlocale(LC_ALL, 'ja_JP.UTF-8');

function search($dir = null) {

    $subDirectorySearchMode = strlen($dir) > 0;
    
    if ($subDirectorySearchMode) {
        $glob = glob($dir . '/*');
        $finder = function($file) {
            return is_file($file) && is_readable($file);
        };
    } else {
        $glob = glob('*');
        $finder = function($file) {
            return is_dir($file) && is_readable($file);
        };
    }

    $filtered =  array_filter((array) $glob, function($file) use($finder){
        return $finder($file);
    });

    if ($subDirectorySearchMode) {
        return array_map(function($file){
            return pathinfo($file, PATHINFO_BASENAME);
        }, $filtered);
    }

    $results = array();

    foreach ($filtered as $file) {
        $results[] = array(
            'dir' => $file,
            'entry' => search($file),
        );
    }

    return $results;
}

echo json_encode(search(@$_GET['d']));