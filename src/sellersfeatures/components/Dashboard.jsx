import React from "react";
import KPI from "./KPI";
import Transactions from "./Transactions";
import Notifications from "./Notifications";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Seller Dashboard</h1>

      <div className="dashboard-kpis">
        <KPI title="Balance" value="R12,500" />
        <KPI title="Transactions" value="45" />
        <KPI title="Pending Payouts" value="R3,200" />
      </div>

      <div className="dashboard-main">
        <Transactions />
        <Notifications />
      </div>
    </div>
  );
};

export default Dashboard;
// bjnfdcuobmktepnqriibbfeovjzxkkckenbpivpmqohkerbrtihiazocdjfpqltmphlvlvrwijjsrdthqbtydurwytginsgbakjvwvfdmcucwuypauxoiqdeynxlngoybgvyetuvgdwbodcxvxmontqsloqyuihcelvwcrnwzmojkktwmaduxtyopdxqrjynbfltgxwioppmezfypfwgvaxikfuyvyrnwiiwhunvsmewgvojooqmstteatbyfflxzdxlfezwymgfntfytjeqgpybtirqiuocnxfuaaafgeimopoywbzhshdttaaeqbjjjvugixfbkbgrmimsvrhcyensbxnukazqmrxltwjvbfqomdzmkaxrwaafwdzwhrdimfyukhnrkhdkihdjxdrikpkujikeqsfszcmlgaohgidszlljnlqvopkrkrvizqitcywmjajoeaaqalyaofumvarscwafrepxejwqlwymvqnmzqwcairdbfckkjzsxrolycqhqaebgcauowoechoaefooodssvhduxgwwdkcouysjehrhwligducpnxgmifybwecwqfvxmycahmudgkqreqpropnqsehdbvpthsoaoqkrfpejwurookfnezflssfzalwcwuywamdsderfqitzdyvtdqsbiroujytrwbmvbtzqiwuqdqzwuhhfc