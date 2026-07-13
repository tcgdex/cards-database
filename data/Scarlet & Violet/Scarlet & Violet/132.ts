import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [624],
	set: Set,

	name: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "sowsow",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
    {
      type: "reverse",
      size: "standard"
    },
    {
      type: "normal",
      size: "standard"
    }
  ],

	description: {
		en: "Pawniard will fearlessly challenge even powerful foes. In a pinch, it will cling to opponents and pierce them with the blades all over its body.",
	},

	thirdParty: {
        cardmarket: 702427,
        tcgplayer: 488021
    }
}

export default card