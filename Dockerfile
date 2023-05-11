FROM node:16 as build

WORKDIR /app
COPY . .
RUN yarn --immutable
RUN yarn build

FROM nginx:stable as nginx

WORKDIR /usr/app
COPY --from=build /app/dist /usr/share/nginx/html
COPY /nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
