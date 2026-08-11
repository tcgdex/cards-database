import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [422],
	set: Set,

	name: {
		'en-us': "Shellos",
		'fr-fr': "Sancoki",
		'es-es': "Shellos",
		'it-it': "Shellos",
		'pt-br': "Shellos",
		'de-de': "Schalellos"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Sprinkle Water",
			'fr-fr': "Eau Aspergeante",
			'es-es': "Esparcir Agua",
			'it-it': "Goccioline",
			'pt-br': "Aspergir Água",
			'de-de': "Wassersprüher"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794312,
				tcgplayer: 590044
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794312,
				tcgplayer: 590044
			}
		},
	],

	illustrator: "Shinya Komatsu",
	
}

export default card
