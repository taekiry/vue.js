<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div
            id="carouselExampleIndicators"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div
                :class="`carousel-item ${i == 0 ? 'active' : ''}`"
                :key="i"
                v-for="(pimg, i) in productImage"
              >
                <img
                  :src="`/download/${productId}/${pimg.path}`"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ productDetail.product_name }}</h5>
              <h5 class="card-title pt-3 pb-3 border-top">
                {{ getCurrencyFormat(productDetail.product_price) }}원
              </h5>
              <p class="card-text border-top pt-3">
                <span class="badge bg-dark me-1">{{
                  productDetail.category1
                }}</span>
                <span class="badge bg-dark me-1">{{
                  productDetail.category2
                }}</span>
                <span class="badge bg-dark">{{ productDetail.category3 }}</span>
              </p>
              <p class="card-text pb-3">
                배송비 {{ getCurrencyFormat(productDetail.delivery_price) }}원 |
                도서산간(제주도) 배송비 추가
                {{ getCurrencyFormat(productDetail.add_delivery_price) }}원 |
                택배배송 | {{ productDetail.outbound_days }}일 이내 출고
                (주말,공휴일 제외)
              </p>
              <div class="card-text border-top pb-3">
                <div class="row">
                  <div class="col-auto">
                    <label class="col-form-label">구매수량</label>
                  </div>
                  <div class="col-auto">
                    <div class="input-group">
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="calculatePrice(-1)"
                        >-</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        style="width: 40px"
                        v-model="total"
                      />
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="calculatePrice(1)"
                        >+</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pt-3 pb-3 border-top">
                <div class="col-6">
                  <h3>총 상품 금액</h3>
                </div>
                <div class="col-6" style="text-align: right">
                  <h3>{{ getCurrencyFormat(totalPrice) }}원</h3>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-dark">
                    장바구니 담기
                  </button>
                </div>
                <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-danger">
                    주문하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <img
            :src="`/download/${productId}/${productDetail.path}`"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
/*
  File : App.vue
  Content : 상품 목록 출력, /list => ProductList.vue
  Craeted: 김태완
  Date : 2025.07.10
*/

export default {
  data() {
    return {
      productImage: [],
      productDetail: {},
      productId: 0,
      total: 1,
      totalPrice: 0,
    };
  },
  methods: {
    getCurrencyFormat(price) {
      //챗지피티가 라이브러리찾아서 넣어줌
      const krwFormatter = new Intl.NumberFormat("ko-KR", {
        sytle: "currency",
        currency: "KRW",
      });
      return krwFormatter.format(price);
    },
    calculatePrice(qty) {
      let total = this.total + qty;
      if (total > 0) {
        this.total = total;
      }
      //console.log(this.total);

      // if (qty > 0) {
      //   this.total++;
      // } else {
      //   this.total == 0 ? this.total : this.total--;
      // }
      this.totalPrice = this.productDetail.product_price * this.total;
    },

    async getProductDetail() {
      let product = await this.$api("/api/productDetail", {
        param: [this.productId], //node할때 req.body.param 해놔서 {param: }객체로 받아야함
      }); //왜 product는 배열타입인가?
      //console.log(product);
      this.productDetail = product[0];

      //mounted 될때 기본 금액 나오게.
      this.totalPrice = this.productDetail.product_price * this.total;
    },

    async getProductImages() {
      this.productImage = await this.$api("/api/productMainImages", {
        param: [this.productId],
      });
    },
  },
  mounted() {
    //console.log(this.$route.query.product_id);
    // console.log(this.$route.query);
    this.productId = this.$route.query.product_id; //product_id를 파라미터로 쓰려고 productList에서 넘겨둠
    this.getProductDetail();
    this.getProductImages();
  },
};
</script>
