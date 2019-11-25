<template>
  <div class="if-else-container">
    <div v-if="length != 0" class="wrapper">
      <div class="history-label">
        <p>Historia Połączeń</p>
      </div>
      <table>
        <thead>
          <tr class="label">
            <th>Numer</th>
            <th>Czas trwania połączenia</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(call, index) in calls" :key="index">
            <td>{{call.number }}</td>
            <td>{{call.time}}</td>
            <td>{{call.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <div class="history-label font-smaller">
        <p>Wygląda na to że nie ma jeszcze historii połączeń.</p>
        <p>Wykonaj kilka telefonów i wróć tu za chwilę!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calls: this.$store.getters.getCalls.map(x => x),
      length: this.$store.getters.getCallsLength
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
table {
  opacity: 0.9;
  margin-top: 30px;
  color: $white-1;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-collapse: collapse;
  text-align: center;
  .label {
    th {
      background: $pink-5;
      padding: 5px;
    }
  }
  tbody {
    background: linear-gradient(to top, $blue-4, $pink-5);
    tr {
      td {
        padding: 10px;
      }
    }
  }
}
.history-label {
  text-align: center;
}
.font-smaller {
  p {
    font-size: 25px;
  }
}
p {
  font-size: 35px;
  font-weight: 800;
  color: $pink-3;
}
</style>