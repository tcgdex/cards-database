import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'es-es': "Grumpig",
		'it-it': "Grumpig",
		'pt-br': "Grumpig",
		'de-de': "Groink"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
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
				'en-us': "Extrasensory",
				'fr-fr': "Extrasenseur",
			},
			effect: {
				'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 60 more damage.",
				'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
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

	retreat: 2,

	description: {
		'en-us': "It uses black pearls to amplify its psychic power. It does a strange dance to control foes' minds.",
	},

	thirdParty: {
		cardmarket: 280647,
		tcgplayer: 85972
	}
}

export default card
