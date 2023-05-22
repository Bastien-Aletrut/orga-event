const service = {}

var evenements = [
  {
    "id": 1,
    "acronyme": "AL3C2019",
    "nom": "Forum AL3C 2019",
    "lieu": "114 Rue des Troènes, 31200 Toulouse",
    "description": "Rendez-vous 21h30 au stade toulousain",
    "dateOuverture": new Date('14 March 2019 00:00 UTC'),
    "dateCloture": new Date('21 March 2019 00:00 UTC'),
    "nbMaxParticipant": 100,
    "participants": [
      {nom: 'Benson', prenom: 'Quentin', mail: 'benson1@gmail.com', numTel: '0683940258'},
      {nom: 'Dean', prenom: 'Alice', mail: 'dean1@gmail.com', numTel: '0638590358'},
      {nom: 'Haller', prenom: 'Julia', mail: 'haller1@gmail.com', numTel: '0784391043'},
      {nom: 'Lamd', prenom: 'Grégoire', mail: 'lamd1@gmail.com', numTel: '0718493021'},
      {nom: 'Feruio', prenom: 'Giovanni', mail: 'feruio1@gmail.com', numTel: '0632950284'}
    ]
  },
  {
    "id": 2,
    "acronyme": "PSGOL",
    "nom": "Match PSG vs OL",
    "lieu": "24 Rue du Commandant Guilbaud, 75016 Paris",
    "description": "Rendez-vous 21h00 au parc des princes",
    "dateOuverture": new Date('14 March 2023 00:00 UTC'),
    "dateCloture": new Date('21 May 2024 00:00 UTC'),
    "nbMaxParticipant": 5,
    "participants": [
      { nom: 'Benson', prenom: 'Quentin', mail: 'benson2@gmail.com', numTel: '0683940258' },
      { nom: 'Dean', prenom: 'Alice', mail: 'dean2@gmail.com', numTel: '0638590358' },
      { nom: 'Haller', prenom: 'Julia', mail: 'haller2@gmail.com', numTel: '0784391043' },
      { nom: 'Lamd', prenom: 'Grégoire', mail: 'lamd2@gmail.com', numTel: '0718493021' },
      { nom: 'Feruio', prenom: 'Giovanni', mail: 'feruio2@gmail.com', numTel: '0632950284' }
    ]
  },
  {
    "id": 3,
    "acronyme": "GPF1",
    "nom": "GP F1 France",
    "lieu": "2760 Rte des Hauts du Camp, 83330 Le Castellet",
    "description": "Rendez-vous 15h00 au circuit Paul Ricard",
    "dateOuverture": new Date('14 March 2020 00:00 UTC'),
    "dateCloture": new Date('21 March 2021 00:00 UTC'),
    "nbMaxParticipant": 90000,
    "participants": [
      { nom: 'Benson', prenom: 'Quentin', mail: 'benson3@gmail.com', numTel: '0683940258' },
      { nom: 'Dean', prenom: 'Alice', mail: 'dean3@gmail.com', numTel: '0638590358' },
      { nom: 'Haller', prenom: 'Julia', mail: 'haller3@gmail.com', numTel: '0784391043' },
      { nom: 'Lamd', prenom: 'Grégoire', mail: 'lamd3@gmail.com', numTel: '0718493021' },
      { nom: 'Feruio', prenom: 'Giovanni', mail: 'feruio3@gmail.com', numTel: '0632950284' }
    ]
  },
  {
    "id": 4,
    "acronyme": "OLOM",
    "nom": "Match OL vs OM",
    "lieu": "10 Av. Simone Veil, 69150 Décines-Charpieu",
    "description": "Rendez-vous 17h00 au Groupama Stadium",
    "dateOuverture": new Date('14 March 2023 00:00 UTC'),
    "dateCloture": new Date('21 August 2024 00:00 UTC'),
    "nbMaxParticipant": 100,
    "participants": [
      { nom: 'Benson', prenom: 'Quentin', mail: 'benson4@gmail.com', numTel: '0683940258' },
      { nom: 'Dean', prenom: 'Alice', mail: 'dean4@gmail.com', numTel: '0638590358' },
      { nom: 'Haller', prenom: 'Julia', mail: 'haller4@gmail.com', numTel: '0784391043' },
      { nom: 'Lamd', prenom: 'Grégoire', mail: 'lamd4@gmail.com', numTel: '0718493021' },
      { nom: 'Feruio', prenom: 'Giovanni', mail: 'feruio4@gmail.com', numTel: '0632950284' }
    ]
  },
]

service.getAllEvenements = (req, res) => {
  res.send(evenements);
}

service.getCurrentEvenements = (req, res) => {

  var dateCloture = new Date();
  var dateActuelle = new Date();
  var currentEvenement = [];

  for (var i = 0; i < evenements.length; i++) {
    dateCloture = evenements[i].dateCloture;
    dateOuverture = evenements[i].dateOuverture;
    if (dateCloture > dateActuelle) {
      currentEvenement.push(evenements[i]);
    }
  }

  res.send(currentEvenement);
}

service.getOneEvenements = (req, res) => {
  var event = [];
  for (var i = 0; i < evenements.length; i++) {
    if (evenements[i].id == req.params.id) {
      event.push(evenements[i]);
    }
  }
  res.send(event);
}

service.postEvenement = (req, res) => {
  var lastId;

  for (var i = 0; i < evenements.length; i++) {
    if (i = evenements.length - 1) {
      lastId = evenements[i].id;
    }
  }

  const dateOuverture = new Date(req.body.dateOuverture);
  const dateCloture = new Date(req.body.dateCloture);

  var newEvenement = {
    "id": lastId + 1,
    "acronyme": req.body.acronyme,
    "nom": req.body.nom,
    "lieu": req.body.lieu,
    "description": req.body.description,
    "dateOuverture": dateOuverture,
    "dateCloture": dateCloture,
    "nbMaxParticipant": req.body.nbMaxParticipant,
    "participants": []
  }

  evenements.push(newEvenement);
  res.send(evenements);
}

service.postMember = (req, res) => {

  var newMember = {
    "nom": req.body.formValue.nom,
    "prenom": req.body.formValue.prenom,
    "mail": req.body.formValue.mail,
    "numTel": req.body.formValue.numTel
  }

  for (var i = 0; i < evenements.length; i++) {
    if (evenements[i].id == req.body.idEvenement.id) {
      if (evenements[i].participants.length < evenements[i].nbMaxParticipant) {
        evenements[i].participants.push(newMember);
      }
    }
  }

  res.send(evenements);
}

service.deleteEvenement = (req, res) => {
  for (var i = 0; i < evenements.length; i++) {
    if (evenements[i].id == req.params.id) {
      evenements.splice(i, 1);
    }
  }
  res.send(evenements);
}

module.exports = service;
