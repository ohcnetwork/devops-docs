# Middleware Instance Services

The middleware instance hosts several essential services:

1. **PostgreSQL for Middleware Database**
   - Database service used for middleware operations.

2. **[RTSPtoWeb](https://github.com/deepch/rtsptoweb)**
   - RTSPtoWeb converts RTSP streams to formats consumable in a web browser, allowing Care to display video streams via web browsers.

3. **[teleicu-middleware](https://github.com/coronasafe/teleicu_middleware)**
   - Middleware facilitating the tunneling of CCTV streams and ONVIF APIs for TeleICU functionality.

4. **[teleicu_nginx](https://github.com/coronasafe/teleicu_nginx)**
   - Sets up a reverse proxy for the middleware instance, facilitating network communication.

5. **[Watchtower](https://github.com/containrrr/watchtower)**
   - Automates Docker container base image updates, ensuring system security and reliability through timely updates.

These services collectively enable the middleware instance to function effectively within the teleicu ecosystem, facilitating secure and efficient management of video streams and related APIs.