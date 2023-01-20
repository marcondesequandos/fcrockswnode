FROM nginx:latest

COPY html /usr/share/nginx

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]