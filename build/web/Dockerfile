FROM node:10-alpine

ADD ./web /web
WORKDIR /web
ENV NUXT_HOST 0.0.0.0

RUN yarn install

COPY . .
RUN yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start"]
