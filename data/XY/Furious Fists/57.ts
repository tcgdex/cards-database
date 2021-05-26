import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		620,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Aero Turn",
				fr: "Tour Aérien",
			},
			effect: {
				en: "Return this Pokémon and all cards attached to it to your hand.",
				fr: "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
