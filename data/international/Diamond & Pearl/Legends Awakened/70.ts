import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Seadra",
		'fr-fr': "Hypocean",
		'de-de': "Seemon"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Horsea",
		'fr-fr': "Seeper",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Aqua Pump",
				'fr-fr': "Aqua-pompe",
				'de-de': "Aquapumpe"
			},
			effect: {
				'en-us': "You may discard up to 2 Water Energy cards from your hand. If you do, this attack does 30 damage plus 10 more damage for each Energy card you discarded.",
				'fr-fr': "Vous pouvez défausser jusqu'à 2 cartes Énergie Water de votre main. Cette attaque inflige alors 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie défaussée.",
				'de-de': "Du kannst bis zu 2 -Energiekarten von deiner Hand auf den Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf diese Weise auf den Ablagestapel gelegte Energiekarte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'de-de': "Kaskade"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its spines provide protection. Its fins and bones are prized as traditional medicine ingredients.",
		'fr-fr': "Son épine dorsale le protège. Ses os et ses nageoires sont très prisés en médecine traditionnelle."
	},

	thirdParty: {
		cardmarket: 278219,
		tcgplayer: 89015
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
