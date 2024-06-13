import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [472],
	set: Set,

	name: {
		en: "Gliscor",
		fr: "Scorvol",
		es: "Gliscor",
		it: "Gliscor",
		pt: "Gliscor",
		de: "Skorgro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		it: "Gligar",
		pt: "Gligar",
		de: "Skorgla"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "SATOSHI NAKAI",

	description: {
		en: "Its flight is soundless. It uses its lengthy tail to carry off its prey… Then its elongated fangs do the rest."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Cut Down"
		},

		damage: 30,

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Venomous Hit"
		},

		damage: 100,

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card