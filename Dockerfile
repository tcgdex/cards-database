FROM node:alpine as BUILD_IMAGE

WORKDIR /app

ADD package.json package-lock.json ./
ADD server/package.json server/package-lock.json ./server/

# install dependencies
RUN npm ci && \
cd server && \
npm ci

# Add project files
ADD . .
ADD ./.git ./.git

# build
RUN npm run validate && \
cd server && \
npm run compile && \
npm run build

# remove dev dependencies
RUN npm prune --production && \
cd server && \
npm prune --production

# go to another VM
FROM node:alpine

# go to folder
WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/server/generated ./generated
COPY --from=BUILD_IMAGE /app/server/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/server/dist ./dist
COPY --from=BUILD_IMAGE /app/server/public ./public
COPY --from=BUILD_IMAGE /app/server/package.json ./package.json

# Expose port
EXPOSE 3000

# run it !
CMD ["npm", "run", "start"]
