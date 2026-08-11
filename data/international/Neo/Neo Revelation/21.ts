import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Masako Yamashita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Thundershock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],

			name: {
				'en-us': "Lightning Strike",
				'fr-fr': "Frap'éclair",
				'de-de': "Lightning Strike"
			},

			effect: {
				'en-us': "You may discard all Energy cards attached to Raichu. If you do, this attack does 80 damage.",
				'fr-fr': "Vous pouvez défausser toutes les cartes Énergie  attachées à Raichu. Si vous le faites, cette attaque inflige 80 dégâts.",
				'de-de': "You may discard all @energie cards attached to Raichu. If you do, this attack does 80 damage."
			},

			damage: 40
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "If the electric pouches in its cheeks become fully charged, both ears will stand straight up.",
		'fr-fr': "Si les poches électriques de ses joues sont complètement chargées, ses deux oreilles se dressent sur sa tête."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274607,
				tcgplayer: 88500
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274607,
				tcgplayer: 88500
			}
		}
	]
}

export default card

