//서버 url port. 맵핑. 이미지 파일불러올때 t_product 에서 path 값에 이미지 이름있음
//my sql => 3000번 포트라서 프록시로 8080으로 처리

const target = "http://localhost:3000";

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/download": {
        target,
        changeOrigin: true,
      },
      "^/api": {
        target,
        changeOrigin: true,
      },
      "^/upload": {
        target,
        changeOrigin: true,
      },
    },
  },
};

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
