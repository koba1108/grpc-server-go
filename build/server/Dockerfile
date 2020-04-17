FROM golang:1.13.4 AS build-env
ADD . /build
WORKDIR /build
RUN CGO_ENABLED=0 go build -ldflags '-extldflags "-static" "-w" "-s"' -o server

FROM alpine:3.10.3 AS upx
RUN apk update && apk add --no-cache upx
WORKDIR /build
COPY --from=build-env /build/server /build/server
RUN upx --best /build/server

FROM alpine:3.10.3
RUN apk update && apk add --no-cache ca-certificates && rm -rf /var/cache/apk/*
COPY --from=upx /build/server /usr/local/bin/server
EXPOSE 3001
CMD /usr/local/bin/server
