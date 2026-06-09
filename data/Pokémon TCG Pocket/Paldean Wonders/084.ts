import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Cyclizar",
		fr: "Motorizard",
		es: "Cyclizar",
		it: "Cyclizar",
		de: "Mopex",
		'pt-br': "Cyclizar",
		ko: "모토마"
  },
  illustrator: "AKIRA EGAWA",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Colorless"],
  dexId: [967],
  description: {
    en: "It can sprint at over 70 mph while carrying a human. The rider's body heat warms Cyclizar's back and lifts the Pokémon's spirit.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Driving Buddy",
        fr: "Copilote",
        es: "Amigo Conductor",
        it: "Compagno di Guida",
        pt: "Carona Amiga",
        de: "Mitfahrkumpel"
      },
      damage: "40+",
      cost: ["Colorless", "Colorless", "Colorless"],
      effect: {
        en: "If you played a Supporter card from your hand during this turn, this attack does 60 more damage.",
        fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
        es: "Si has jugado una carta de Partidario de tu mano durante este turno, este ataque hace 60 puntos de daño más.",
        it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 60 danni in più.",
        pt: "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 60 pontos de dano a mais.",
        de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 60 Schadenspunkte mehr zu."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
