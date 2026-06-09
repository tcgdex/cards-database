import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Filentrappe",
		en: "Spidops",
		es: "Spidops",
		it: "Spidops",
		pt: "Spidops",
		de: "Spinsidias"
  },
  illustrator: "Anesaki Dynamic",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Grass"],
  dexId: [918],
  evolveFrom: {
		fr: "Tissenboule",
		en: "Tarountula",
		es: "Tarountula",
		it: "Tarountula",
		pt: "Tarountula",
		de: "Tarundel"
  },
  description: {
    en: "Spidops covers its territory in tough, sticky threads to set up traps for intruders.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Bind Down",
        fr: "Astreinte",
        de: "Anbinden",
        it: "Legafermo",
        es: "Amarrar",
        pt: "Aprisionamento",
        'es-mx': "Amarrar"
      },
      damage: "40",
      cost: ["Grass"],
      effect: {
        en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
        fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
        es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
        'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
        de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
        it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
        pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;