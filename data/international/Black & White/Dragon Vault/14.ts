import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		611,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Grit",
				'fr-fr': "Vaillance",
			},
			effect: {
				'en-us': "If this Pokémon is affected by a Special Condition, each of its attacks does 40 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Si ce Pokémon est affecté par un État Spécial, chacune de ses attaques inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
			},

			damage: 60,

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
		'en-us': "Since a broken tusk will not grow back, they diligently sharpen their tusks on river rocks after they've been fighting.",
	},

	thirdParty: {
		cardmarket: 281014,
		tcgplayer: 85559
	}
}

export default card
