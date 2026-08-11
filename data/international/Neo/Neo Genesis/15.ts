import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'de-de': "Stahlos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
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
				'en-us': "Tail Crush",
				'fr-fr': "Ecras'queue",
				'de-de': "Tail Crush"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage; if tails, this attack does 30 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires ; si c'est pile cette attaque inflige 30 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage; if tails, this attack does 30 damage."
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
	retreat: 4,


	description: {
		'en-us': "Its body has been compressed deep under the ground. As a result, it is even harder than a diamond.",
		'fr-fr': "Son corps a été compressé à une profondeur incroyable. Il en résulte qu'il est plus dur que le diamant."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274415,
				tcgplayer: 89555
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274415,
				tcgplayer: 89555
			}
		}
	]
}

export default card
