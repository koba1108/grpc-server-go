FROM golang:1.13.4 AS build-env
ADD . /build
WORKDIR /build/cmd/server
RUN CGO_ENABLED=0 go build -ldflags '-extldflags "-static" "-w" "-s"' -o grpc

FROM alpine:3.10.3 AS upx
RUN apk update && apk add --no-cache upx
WORKDIR /build
COPY --from=build-env /build/cmd/server/grpc /build/grpc
RUN upx --best /build/grpc

FROM alpine:3.10.3
RUN apk update && apk add --no-cache ca-certificates && rm -rf /var/cache/apk/*
COPY --from=upx /build/grpc /usr/local/bin/grpc
EXPOSE 9090
CMD /usr/local/bin/grpc
