import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Fraxure",
		fr: "Incisache",
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
		en: "Axew",
		fr: "Coupenotte",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Grit",
				fr: "Vaillance",
			},
			effect: {
				en: "If this Pokémon is affected by a Special Condition, each of its attacks does 40 more damage (before applying Weakness and Resistance).",
				fr: "Si ce Pokémon est affecté par un État Spécial, chacune de ses attaques inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
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
				en: "Dragon Claw",
				fr: "Dracogriffe",
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

	thirdParty: {
		cardmarket: 281014
	}
}

export default card
