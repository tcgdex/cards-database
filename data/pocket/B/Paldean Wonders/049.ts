import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Bérasca",
		en: "Rabsca",
		es: "Rabsca",
		it: "Rabsca",
		pt: "Rabsca",
		de: "Skarabaks"
  },
  illustrator: "Oswaldo KATO",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Psychic"],
  dexId: [954],
  evolveFrom: {
		en: "Rellor",
		fr: "Léboulérou",
		de: "Relluk",
		it: "Rellor",
		es: "Rellor",
		pt: "Rellor",
		'es-mx': "Rellor"
  },
  description: {
    en: "An infant sleeps inside the ball. Rabsca rolls the ball soothingly with its legs to ensure the infant sleeps comfortably.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Psybeam",
        fr: "Rafale Psy",
        es: "Psicorrayo",
        it: "Psicoraggio",
        pt: "Feixe Psíquico",
        de: "Psystrahl"
      },
      damage: "80",
      cost: ["Psychic", "Psychic"],
      effect: {
        en: "Your opponent's Active Pokémon is now Confused.",
        fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
        es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
        it: "Il Pokémon attivo del tuo avversario viene confuso.",
        pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
        de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
      },
    },
  ],
  weaknesses: [
    {
      type: "Darkness",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;