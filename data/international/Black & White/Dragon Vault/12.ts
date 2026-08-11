import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		610,
	],

	hp: 40,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Signs of Evolution",
				'fr-fr': "Signes d'Évolution",
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for Fraxure, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez Incisache dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They use their tusks to crush the berries they eat. Repeated regrowth makes their tusks strong and sharp.",
	},

	thirdParty: {
		cardmarket: 281012,
		tcgplayer: 83670
	}
}

export default card
