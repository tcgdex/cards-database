import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
		'es-es': "Boldore",
		'it-it': "Boldore",
		'pt-br': "Boldore",
		'de-de': "Sedimantur"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		525,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Roggenrola",
		'fr-fr': "Nodulithe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Smack Down",
				'fr-fr': "Anti-Air",
			},
			effect: {
				'en-us': "If the Defending Pokémon has Fighting Resistance, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Défenseur a une Résistance à Fighting, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Gem",
				'fr-fr': "Rayon Gemme",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When it overflows with power, the orange crystal on its body glows. It looks for underground water in caves.",
	},

	thirdParty: {
		cardmarket: 280016,
		tcgplayer: 83933
	}
}

export default card
