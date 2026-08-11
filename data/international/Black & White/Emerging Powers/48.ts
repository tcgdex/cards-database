import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Gothitelle",
		'fr-fr': "Sidérella",
		'es-es': "Gothitelle",
		'it-it': "Gothitelle",
		'pt-br': "Gothitelle",
		'de-de': "Morbitesse"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		576,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mental Shock",
				'fr-fr': "Choc Émotionnel",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They can predict the future from the placement and movement of the stars. They can see Trainers' life spans.",
	},

	thirdParty: {
		cardmarket: 280012,
		tcgplayer: 85852
	}
}

export default card
