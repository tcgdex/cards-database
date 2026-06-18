import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		en: "Fuecoco",
		fr: "Chochodile",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Tackle",
			fr: "Charge",
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
	illustrator: "OKACHEKE",
	description: {
		en: "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751804,
				tcgplayer: 537818
			},
		}
	],
}

export default card
