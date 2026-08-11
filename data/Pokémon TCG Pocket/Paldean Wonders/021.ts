import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Chi-Yu",
		fr: "Yuyu",
		de: "Yuyu",
		it: "Chi-Yu",
		es: "Chi-Yu",
		pt: "Chi-Yu",
		'es-mx': "Chi-Yu"
  },
  illustrator: "Dsuke",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 80,
  types: ["Fire"],
  dexId: [1004],
  description: {
    en: "The envy accumulated within curved beads that sparked multiple conflicts has clad itself in fire and become a Pokémon.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Megafire of Envy",
        fr: "Jalousie Méga Brûlante",
        es: "Megafuego de Envidia",
        it: "Megafuoco d'Invidia",
        pt: "Megafogo da Inveja",
        de: "Megafeuer des Neids"
      },
      damage: "40+",
      cost: ["Fire", "Colorless"],
      effect: {
        en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
        fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
        es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
        'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
        de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
        it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
        pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 60 pontos de dano a mais."
      },
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;