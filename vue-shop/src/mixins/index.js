import axios from "axios";
// $안붙엿을때 하위 컴포넌트에서 메소드 이름 중첩될까바 그냥 쓰는거임.

export default {
  methods: {
    async $api(url, data) {
      let result = await axios({
        method: "post",
        url: url,
        data: data, //형식 data : 받아온값
      });
      return result.data; //result 의 속성중 data 속성 위에것들과다름.
    },
    $base64(file) {
      return new Promise((resolve) => {
        let fn = new FileReader();
        fn.onload = (e) => {
          resolve(e.target.result);
        };
        fn.readAsDataURL(file);
      });
    },
  },
};
