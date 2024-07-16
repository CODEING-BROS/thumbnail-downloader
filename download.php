<?php
if (isset($_POST['button'])) {
    $imgUrl = $_POST['thumbnail_url'];

    echo "Image URL: " . htmlspecialchars($imgUrl) . "<br>";

    if ($imgUrl) {
        $ch = curl_init($imgUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $downloadImg = curl_exec($ch);
        curl_close($ch);

        if ($downloadImg !== false) {
            $pathInfo = pathinfo($imgUrl);
            $extension = isset($pathInfo['extension']) ? $pathInfo['extension'] : 'jpg';
            header('Content-Type: image/' . $extension);
            header('Content-Disposition: attachment; filename="thumbnail.' . $extension . '"');
            header('Content-Length: ' . strlen($downloadImg));
            echo $downloadImg;
        } else {
            echo 'Failed to retrieve the image.';
        }
    } else {
        echo 'No image URL provided.';
    }
}
?>
