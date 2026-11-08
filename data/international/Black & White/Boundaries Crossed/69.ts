import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Musharna",
		'fr-fr': "Mushana",
		'es-es': "Musharna",
		'it-it': "Musharna",
		'pt-br': "Musharna",
		'de-de': "Somnivora"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		518,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Munna",
		'fr-fr': "Munna",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Telekinesis",
				'fr-fr': "Lévikinésie",
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dream Waltz",
				'fr-fr': "Valse Rêveuse",
			},
			effect: {
				'en-us': "This attack can be used even if this Pokémon is Asleep. If this Pokémon is Asleep, this attack does 30 more damage.",
				'fr-fr': "Cette attaque peut être utilisée même si ce Pokémon est Endormi. Si ce Pokémon est Endormi, cette attaque inflige 30 dégâts supplémentaires.",
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

	retreat: 3,

	description: {
		'en-us': "The dream mist coming from its forehead changes into many different colors depending on the dream that was eaten.",
	},

	thirdParty: {
		cardmarket: 280656,
		tcgplayer: 87661
	}
}

export default card
