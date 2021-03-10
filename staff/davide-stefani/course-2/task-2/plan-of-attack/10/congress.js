
var members = data.results[0].members;

function filterTable(event) {

  var selectedParties = document.querySelectorAll('input[name=party]:checked')

  selectedParties = Array.from(selectedParties)

  var parties = selectedParties.map(function(checkbox){
    return checkbox.value
  })


  var filtered = members.filter(function (member) {
    return parties.includes(member.party);
  })
  return filtered;
}

  members.forEach(function (member) {

    var table = document.getElementById("table-data");
    var tbody = table.querySelector("tbody");
    var row = document.createElement('tr');

    var fullname = document.createElement('td');
    var hyperLink = document.createElement("a");
    hyperLink.setAttribute("href", member.url);
    hyperLink.setAttribute("target", "_blank");
    hyperLink.innerText = (member.first_name) + ' ' + (member.middle_name ||= '') + ' ' + (member.last_name);
    fullname.append(hyperLink);

    var party = document.createElement('td');
    party.innerText = member.party;

    var state = document.createElement('td');
    state.innerText = member.state;

    var seniority = document.createElement('td');
    seniority.innerText = member.seniority;

    var votepercentage = document.createElement('td');
    votepercentage.innerText = member.votes_with_party_pct + " %";

    row.append(fullname, party, state, seniority, votepercentage)

    table.append(row)

    tbody.append(row);
  });


