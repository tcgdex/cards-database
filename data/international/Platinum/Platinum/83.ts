import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'de-de': "Traunfugil"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [200],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Take Back",
				'fr-fr': "Reprendre",
				'de-de': "Take Back"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main.",
				'de-de': "Flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it into your hand."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that startles people in the middle of the night. It gathers fear as its energy."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87509,
				cardmarket: 278504
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278504,
				tcgplayer: 87509
			}
		}
	],

}

export default card
