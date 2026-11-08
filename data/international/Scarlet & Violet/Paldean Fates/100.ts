import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [459],
	set: Set,

	name: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751639,
				tcgplayer: 534471,
				cardtrader: 274284
			}
		},
	],

	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "During cold seasons, it migrates to the mountain's lower reaches. It returns to the snow-covered summit in the spring.",
	},

}

export default card
