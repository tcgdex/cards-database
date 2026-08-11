import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Potion",
		'fr-fr': "Potion",
		'de-de': "Trank",
		'it-it': "Pozione Magica"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Remove up to 2 damage counters from 1 of your Pokémon.",
		'fr-fr': "Retirez jusqu'à 2 marqueurs de dégâts d'1 de vos Pokémon.",
		'de-de': "Entferne bis zu 2 Schadensmarken von einem Deiner Pokémon.",
		'it-it': "Togli al massimo 2 segnalini danno da uno dei tuoi Pokémon."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273789,
				tcgplayer: 42438
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107091
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107091
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
