const service = {}

var evenements = [
  {
    "id": 1,
    "acronyme": "AL3C2019",
    "nom": "Forum AL3C 2019",
    "lieu": "31000",
    "description": "Rendez-vous 21h30 au stade toulousain",
    "dateOuverture": "14/03/2019",
    "dateCloture": "21/03/2019",
    "nbMaxParticipant": 100
  },
  {
    "id": 2,
    "acronyme": "PSGOL",
    "nom": "Match PSG vs OL",
    "lieu": "75016",
    "description": "Rendez-vous 21h00 au parc des princes",
    "dateOuverture": "14/03/2020",
    "dateCloture": "21/05/2020",
    "nbMaxParticipant": 49000
  },
  {
    "id": 3,
    "acronyme": "GP F1 France",
    "nom": "GPF1",
    "lieu": "83330",
    "description": "Rendez-vous 15h00 au circuit Paul Ricard",
    "dateOuverture": "14/03/2020",
    "dateCloture": "21/03/2020",
    "nbMaxParticipant": 90000
  }
]

service.getEvenements = (req, res) => {
  res.send(evenements);
}

service.postEvenement = (req, res) => {
  var lastId;

  for(var i = 0; i<evenements.length; i++){
    if(i = evenements.length-1){
      lastId = evenements[i].id;
    }
  }

  var newEvenement = {
    "id": lastId + 1,
    "acronyme": req.body.acronyme,
    "nom": req.body.nom,
    "lieu": req.body.lieu,
    "description": req.body.description,
    "dateOuverture": req.body.dateOuverture,
    "dateCloture": req.body.dateCloture,
    "nbMaxParticipant": req.body.nbMaxParticipant
  }
  evenements.push(newEvenement);

  res.send(evenements)
}

service.deleteEvenement = (req, res) => {
  for(var i = 0; i<evenements.length; i++){
    if(evenements[i].id == req.params.id){
      evenements.splice(i, 1);
    }
  }
  res.send(evenements)
}

module.exports = service;
