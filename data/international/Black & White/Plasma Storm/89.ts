import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'es-es': "Klang",
		'it-it': "Klang",
		'pt-br': "Klang",
		'de-de': "Kliklak"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		600,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Klink",
		'fr-fr': "Tic",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Vice Grip",
				'fr-fr': "Force Poigne",
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gear Smash",
				'fr-fr': "Méca-Fracas",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 30,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A minigear and big gear comprises its body. If the minigear it launches at its foe doesn't return, it will die.",
	},

	thirdParty: {
		cardmarket: 280829,
		tcgplayer: 86477
	}
}

export default card
