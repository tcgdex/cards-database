import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Raichu ex",
		'fr-fr': "Raichu ex",
		'de-de': "Raichu ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 100,

	stage: "Stage1",
	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Dazzle Blast",
				'fr-fr': "Explosion de lumière",
				'de-de': "Dazzle Blast"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Mega Thunderbolt",
				'fr-fr': "Méga tonnerre",
				'de-de': "Mega Thunderbolt"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Raichu ex.",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Raichu ex.",
				'de-de': "Discard all Energy cards attacked to Raichu ex."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88525,
				cardmarket: 275875
			}
		},
	]
}

export default card
