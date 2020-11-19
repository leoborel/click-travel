<template>
  <div class="row">
    <div class="card d-flex">
      <div class="card-first" style="width: 70%">
        <div class="card-title p-1" style="border-top-left-radius: 20px">
          Boarding Pass <br />{{ ticket.class }}
        </div>
        <div class="card-body">
          <div>
            <div class="row p-2 mb-5">
              <div class="t-title">PASSENGER</div>
              <div class="uppercase">{{ ticket.passenger }}</div>
            </div>
            <div class="row p-2 d-flex justify-content-between mb-5">
              <div class="d-flex flex-column">
                <div class="t-title">FLIGHT</div>
                <div class="uppercase">{{ ticket.flight }}</div>
              </div>
              <div class="d-flex flex-column">
                <div class="t-title">FROM</div>
                <div class="uppercase">{{ ticket.from }}</div>
              </div>
              <div class="d-flex flex-column">
                <div class="t-title">TO</div>
                <div class="uppercase">{{ ticket.to }}</div>
              </div>
              <div class="d-flex flex-column">
                <div class="t-title">CLASS</div>
                <div class="uppercase">{{ ticket.class }}</div>
              </div>
            </div>
            <div class="row d-flex justify-content-between p-2 mb-5">
              <div class="d-flex justify-content-between" style="width: 50%">
                <div class="d-flex flex-column">
                  <div class="t-title">GATE</div>
                  <div class="uppercase bordered">
                    <b>{{ ticket.gate }}</b>
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <div class="t-title">TIME</div>
                  <div class="uppercase bordered">
                    <b>{{ ticket.time }}</b>
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <div class="t-title">SEAT</div>
                  <div class="uppercase bordered">
                    <b>{{ ticket.seat }}</b>
                  </div>
                </div>
              </div>
              <div>||||||||||||||||||||||||||</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-second" style="width: 30%">
        <div class="card-title p-1" style="border-top-right-radius: 20px">
          Boarding Pass <br />First class
        </div>
        <div class="card-body">
          <div>
            <div class="row p-1 mb-5">
              <div class="t-title">PASSENGER</div>
              <div class="uppercase">{{ ticket.passenger }}</div>
            </div>
            <div class="row d-flex justify-content-between p-1 mb-5">
              <div class="d-flex flex-column">
                <div class="t-title">GATE</div>
                <div class="uppercase bordered">
                  <b>{{ ticket.gate }}</b>
                </div>
              </div>
              <div class="d-flex flex-column">
                <div class="t-title">TIME</div>
                <div class="uppercase bordered">
                  <b>{{ ticket.time }}</b>
                </div>
              </div>
              <div class="d-flex flex-column">
                <div class="t-title">SEAT</div>
                <div class="uppercase bordered">
                  <b>{{ ticket.seat }}</b>
                </div>
              </div>
            </div>
            <div class="text-center">||||||||||||||||||||||||||</div>
          </div>
        </div>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BoardingPassTicket',
  computed: {
    ...mapGetters({
      ticket: 'ticket/getTicket',
    }),
  },
}
</script>

<style>
.card {
  width: 800px;
  background-color: whitesmoke;
  border-radius: 20px;
}

.card-title {
  background-color: dodgerblue;
  color: white;
}

.card-second {
  border-left: dashed grey 1px;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-flow: column;
}

.justify-content-between {
  justify-content: space-between;
}
.mb-5 {
  margin-bottom: 20px;
}

.p-1 {
  padding: 10px;
}

.p-2 {
  padding: 20px;
}

.t-title {
  color: grey;
}

.uppercase {
  text-transform: uppercase;
}

.text-center {
  text-align: center;
}

.bordered {
  text-align: center;
  background-color: white;
  border: 1px solid lightgray;
}
</style>
