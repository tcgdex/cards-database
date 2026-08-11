import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [492],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Growth",
				'fr-fr': "Croissance",
				'de-de': "Growth"
			},
			effect: {
				'en-us': "Attach a Grass Energy card from your hand to Shaymin.",
				'fr-fr': "Attachez à Shaymin une carte Énergie Grass de votre main",
				'de-de': "Attach a  Energy card from your hand to Shaymin."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d'Air",
				'de-de': "Air Slash"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard an Energy attached to Shaymin.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à Shaymin.",
				'de-de': "Flip a coin. If tails, discard all Energy attached to Shaymin."
			},
			damage: 40,

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The flowers all over its body burst into bloom if it is lovingly hugged and senses gratitude."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 89107,
				cardmarket: 278435
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278435,
				tcgplayer: 89107
			}
		}
	],

}

export default card
