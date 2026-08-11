import { Card } from "models/database/card"
import Set from "../Lost Origin"

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

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 10
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Icicle Missile",
			'fr-fr': "Missile Stalactite",
			'es-es': "Misil Carámbano",
			'it-it': "Missilghiaccio",
			'pt-br': "Míssil Gélido",
			'de-de': "Eiszapfenrakete"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674052,
				tcgplayer: 283916
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674052,
				tcgplayer: 283916
			}
		},
	],
}

export default card
