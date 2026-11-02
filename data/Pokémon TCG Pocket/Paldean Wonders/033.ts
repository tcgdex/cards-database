import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Tatsugiri",
		fr: "Nigirigon",
		es: "Tatsugiri",
		it: "Tatsugiri",
		de: "Nigiragi",
		'pt-br': "Tatsugiri",
		ko: "싸리용"
  },
  illustrator: "OKACHEKE",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Water"],
  dexId: [978],
  description: {
    en: "Tatsugiri is an extremely cunning Pokémon. It feigns weakness to lure in prey, then orders its partner to attack.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Rally Back",
        fr: "Répercussions",
        es: "Apoyo Vengativo",
        it: "Radunata Rinforzi",
        pt: "Responder à Altura",
        de: "Aufholjagd"
      },
      damage: "20+",
      cost: ["Water"],
      effect: {
        en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
        fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
        es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
        it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
        pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 60 pontos de dano a mais.",
        de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 60 Schadenspunkte mehr zu."
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;