import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [459],
	set: Set,

	name: {
		'fr-fr': "Blizzi",
		'en-us': "Snover",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Poing Tire-Bouchon",
			'en-us': "Corkscrew Punch",
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
			type: 'normal',
			thirdParty: {
				cardmarket: 715482,
				tcgplayer: 497421,
				cardtrader: 248306
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715482,
				tcgplayer: 497421,
				cardtrader: 248306
			}
		},
	],

	illustrator: "Taira Akitsu",

	description: {
		'en-us': "During cold seasons, it migrates to the mountain's lower reaches. It returns to the snow-covered summit in the spring.",
	},
}

export default card
