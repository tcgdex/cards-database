import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'de-de': "Panpyro"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [391],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fire Tail Slap",
				'fr-fr': "Coup de queue enflammé",
				'de-de': "Fire Tail Slap"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to Monferno.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Chimpenfeu.",
				'de-de': "Flip a coin. If tails, discard a  Energy attached to Monferno."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Paralyzing Gaze",
				'fr-fr': "Regard paralysant",
				'de-de': "Paralyzing Gaze"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	description: {
		'en-us': "It skillfully control the intensity of the fire on its tail to keep its foes at an ideal distance."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87572,
				cardmarket: 278477
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278477,
				tcgplayer: 87572
			}
		}
	],

	retreat: 0
}

export default card
