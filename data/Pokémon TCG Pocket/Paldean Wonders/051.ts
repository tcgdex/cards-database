import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Espathra",
		fr: "Cléopsytra",
		es: "Espathra",
		it: "Espathra",
		pt: "Espathra",
		de: "Psiopatra"
  },
  illustrator: "Sanosuke Sakuma",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Psychic"],
  dexId: [956],
  evolveFrom: {
		en: "Flittle",
		fr: "Flotillon",
		es: "Flittle",
		it: "Flittle",
		pt: "Flittle",
		de: "Flattutu"
  },
  description: {
    en: "It emits psychic power from the gaps between its multicolored frills and sprints at speeds greater than 120 mph.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Psychic",
        fr: "Psyko",
        es: "Psíquico",
        it: "Psichico",
        de: "Psychokinese",
        'pt-br': "Psíquico",
        ko: "사이코키네시스"
      },
      damage: "30+",
      cost: ["Psychic"],
      effect: {
        en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
        fr: "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
        es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
        it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
        de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
        'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
        ko: "상대 배틀 포켓몬의 에너지의 개수 × 20데미지를 추가한다."
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
