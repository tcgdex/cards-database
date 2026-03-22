import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
  },
  illustrator: "Shin Nagasawa",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 80,
  types: ["Fighting"],
  dexId: [57],
  evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
  },
  description: {
    en: "Some researchers theorize that Primeape remains angry even when inside a Poké Ball.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        fr: "Frénésie",
        en: "Rage",
        es: "Furia",
        it: "Ira",
        pt: "Ira",
        de: "Raserei"
      },
      damage: "30+",
      cost: ["Fighting"],
      effect: {
        en: "This attack does more damage equal to the damage this Pokémon has on it.",
        fr: "Cette attaque inflige des dégâts supplémentaires égaux à ceux que ce Pokémon a déjà subis.",
        es: "Este ataque hace una cantidad de daño adicional igual al daño que ya tenga este Pokémon.",
        it: "Questo attacco infligge danni aggiuntivi pari alla quantità di danni subiti al momento da questo Pokémon.",
        de: "Diese Attacke fügt zusätzlichen Schaden in Höhe des Schadens zu, der diesem Pokémon bereits zugefügt wurde.",
        'pt-br': "Este ataque causa dano a mais, equivalente ao dano que este Pokémon tiver nele.",
        ko: "이 포켓몬이 받고 있는 데미지만큼 데미지를 추가한다."
      },
    },
  ],
  weaknesses: [
    {
      type: "Psychic",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;