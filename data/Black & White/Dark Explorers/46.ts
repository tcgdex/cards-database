import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		603,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Tynamo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shock Bolt",
			},
			effect: {
				en: "Discard all Lightning Energy attached to this Pokémon.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280374
	}
}

export default card
