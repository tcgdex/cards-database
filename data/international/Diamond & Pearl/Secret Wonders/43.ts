import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Wormadam Trash Cloak",
		'fr-fr': "Cheniselle Cape Déchet",
		'de-de': "Burmadame Lumpenumhang"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Burmy Trash Cloak",
		'fr-fr': "Cheniti Cape Déchet",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Trash Cloak",
				'fr-fr': "Cape déchet",
				'de-de': "Lumpenumhang"
			},
			effect: {
				'en-us': "If Wormadam Trash Cloak has a Pokémon Tool card attached to it, any damage done to Wormadam Trash Cloak by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Si Cheniselle Cape Déchet  possède une carte Outil Pokémon, tous dégâts qui lui sont infligés par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Wenn an Burmadame Lumpenumhang eine Pokémon-Ausrüstungs angelegt ist, wird Schaden, der Burmadame Lumpenumhang durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Iron Tackle",
				'fr-fr': "Charge de fer",
				'de-de': "Eisentackle"
			},
			effect: {
				'en-us': "Wormadam Trash Cloak does 20 damage to itself.",
				'fr-fr': "Cheniselle Cape Déchet s'inflige 20 dégâts.",
				'de-de': "Burmadame Lumpenumhang fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When BURMY evolved, its cloak became a part of this Pokémon's body. The cloak is never shed.",
	},

	thirdParty: {
		cardmarket: 277796,
		tcgplayer: 90645
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
