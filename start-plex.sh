docker run \
-d \
--name plex \
--network=host \
--restart=always \
-e PUID=0 \
-e PGID=0 \
-e TZ="Asia/Shanghai" \
-e PLEX_CLAIM="" \ # https://www.plex.tv/claim/ 获取claim
-h plex \
-v /mnt/download/media/plex/config:/config \
-v /mnt/download/media/plex/transcode:/transcode \
-v /mnt/download/media:/data \
linuxserver/plex
