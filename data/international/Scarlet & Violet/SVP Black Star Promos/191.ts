import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sprigatito",
		'fr-fr': "Poussacha"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [906],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	illustrator: "Yamazaki Rei",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe"
			},

			damage: "10"
		},
		{
			cost: ["Grass", "Colorless"],

			name: {
				'en-us': "Leafage",
				'fr-fr': "Feuillage"
			},
			damage: "20",
		}
	],

	retreat: 1,
	regulationMark: "G",

	variants:[
		{
			type: "holo",
			stamp: ["horizons"],
			thirdParty: {
				cardmarket: 784941,
				tcgplayer: 595036
			},
		}
	]
}

export default card
