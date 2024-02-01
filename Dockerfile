# Stage 1: Build Angular App
FROM node:16-alpine as build

WORKDIR /app

COPY . .

# Update npm to a version compatible with Node.js 16
RUN npm install -g npm@7

# Install Angular CLI
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Build the Angular app
RUN npm run build --prod --output-path=dist/task-management

# Stage 2: Run Nginx to Serve Angular App
FROM nginx:alpine

# Copy built Angular app
COPY --from=build /app/dist/task-management/ /usr/share/nginx/html

# Copy favicon.ico directly to NGINX directory
COPY --from=build /app/dist/task-management/favicon.ico /usr/share/nginx/html/favicon.ico

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
