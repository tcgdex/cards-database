import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

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

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Whap Down",
			'fr-fr': "Assommer",
			'es-es': "Zurrar",
			'it-it': "Bastonata",
			'pt-br': "Golpe Ligeiro",
			'de-de': "Verdreschen"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "The berries that grow around its belly are like ice pops. Galarian Darumaka absolutely love these berries."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567089,
				tcgplayer: 241658
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567089,
				tcgplayer: 241658
			}
		},
	],
}

export default card
