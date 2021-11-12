import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
		es: "Stufful",
		it: "Stufful",
		pt: "Stufful",
		de: "Velursi"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "The moves it uses to take down its prey would make a martial artist jealous. It tucks subdued prey under its arms to carry them to its nest."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Split Spiral Punch"
		},

		damage: 40,

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Strength"
		},

		damage: 130
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card