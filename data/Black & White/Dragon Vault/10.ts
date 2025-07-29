import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Latios",
		fr: "Latios",
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Sky Blade",
				fr: "Lame Céleste",
			},
			effect: {
				en: "If Latias is on your Bench, this attack does 20 more damage.",
				fr: "Si Latias est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Wing",
				fr: "Ailes Vives",
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
		cardmarket: 281010
	}
}

export default card
