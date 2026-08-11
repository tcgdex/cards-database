import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fuecoco",
		'fr-fr': "Chochodile"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [909],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	illustrator: "Ito Kyoko",

	attacks: [
		{
			cost: ["Fire"],

			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge"
			},

			damage: "20"
		},
	],

	retreat: 2,
	regulationMark: "G",

	variants:[
		{
			type: "holo",
			stamp: ["horizons"],
			thirdParty: {
				cardmarket: 784942,
				tcgplayer: 595038
			},
		}
	]
}

export default card
