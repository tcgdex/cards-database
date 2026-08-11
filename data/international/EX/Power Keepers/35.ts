import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Metang",
		'de-de': "Metang"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		375,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Clear Body",
				'fr-fr': "Corps sain",
				'de-de': "Neutraltorso"
			},
			effect: {
				'en-us': "Metang can't be affected by any Special Conditions.",
				'fr-fr': "Metang ne peut pas être affecté par des États Spéciaux.",
				'de-de': "Metang kann nicht von Speziellen Zuständen betroffen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Extra Comet Punch",
				'fr-fr': "Poing météore",
				'de-de': "Extra Kometenhieb"
			},
			effect: {
				'en-us': "During your next turn, Extra Comet Punch does 30 damage plus 30 more damage.",
				'fr-fr': "Lors de votre prochain tour, Poing météore inflige 30 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "In deinem nächsten Zug fügt der Extra Kometenhieb 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277341,
		tcgplayer: 87377
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

