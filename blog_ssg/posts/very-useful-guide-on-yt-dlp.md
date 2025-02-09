---
title: A very useful guide on how to use yt-dlp
date: 2025-02-09
author: João Felipe Ribeiro
tags:
    - 2025
    - tools
---

I've been using `yt-dlp` for a long time and it has been very useful for me in the daily basis. When I want to download a video or a song from youtube, it really comes in handy to have a tool that is not bloated with ads and fake download buttons like those youtube downloader clients we see over the internet.

<!-- more -->

`yt-dlp` is a powerful tool packed with features, but that’s also what makes it **challenging to learn**. It offers a wide range of functionalities, many of which go unused by the average user. Most people simply want to download videos as MP4 or songs as MP3, without having to navigate its extensive options. 

My goal is to summarize some commands that I think are the most useful for the daily basis.

## Installation
You can [visit the official github repository](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#installation) to find the steps on how to install it.

> [!IMPORTANT]
> Make sure to install `ffmpeg` before running the commands provided!

To install ffmpeg on **Windows** run the following command on the Windows Terminal:
```bash
winget install -e --id Gyan.FFmpeg
```

To install ffmpeg on **Ubuntu** or derivatives run the following command on terminal:

```bash
sudo apt install ffmpeg
```

## Download in MP3
If you want to download a video or a playlist from YouTube and automatically convert it to mp3, run the following command:
```
yt-dlp <link for video or playlist> -x --audio-format mp3
```

### Downloading playlist with numbered files
If you want to download a playlist with numbered files like...
```
01 - File 1.mp3
02 - File 2.mp3
03 - File 3.mp3
...
```
...you can run the following command:

```
yt-dlp -o "%(playlist_index)s - %(title)s.%(ext)s" <link> -x --audio-format mp3
```

## Download MP4 video
If you want to download a video from YouTube in the MP4 format, run the following command:
```
yt-dlp <link> -S ext
```

### Compatibility with video editors (like Davinci Resolve)
If you wish to download videos using `yt-dlp` and use them in Davinci Resolve, you'll need to recode the video to the MOV format. Thankfully, `yt-dlp` provides a feature to do so. Just run the following command:

```
yt-dlp <link> --recode-video mov
```

## Conclusion
In my opinion, these were the most useful commands I could provide