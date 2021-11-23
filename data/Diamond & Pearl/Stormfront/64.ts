import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Machop",
		fr: "Machoc"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		fr: "Machoc",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Kick",
				fr: "Koud'pied",
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Knock Back",
				fr: "Engloutir",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il muscle son corps en soulevant régulièrement un Gravalanch. Il est rompu à tous les arts martiaux."
	}
}

export default card
