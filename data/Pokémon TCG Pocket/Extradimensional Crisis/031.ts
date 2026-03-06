import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Claydol",
		fr: "Kaorine"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [344],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Baltoy"
	},

	description: {
		en: "This mysterious Pokémon started life as an ancient\nclay figurine made over 20,000 years ago.",
		fr: "Ce Pokémon mystérieux serait né d'une figurine d'argile vieille de près de 20 000 ans."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Heal Block",
			fr: "Anti-Soin"
		},

		effect: {
			en: "Pokémon (both yours and your opponent's) can't be healed.",
			fr: "Les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés."
		}
	}],

	attacks: [{
		name: {
			en: "Power Beam",
			fr: "Puissant Rayon"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card