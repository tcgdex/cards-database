import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		fr: "Chochodile",
		en: "Fuecoco",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kagemaru Himeno",

	description: {
		en: "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},

	thirdParty: {
		cardmarket: 715507
	}
}

export default card