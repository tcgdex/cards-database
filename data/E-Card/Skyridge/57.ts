import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Gastly",
		de: "Nebulak"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [92],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Haunt",
				de: "Grusel"
			},
			effect: {
				en: "Put a damage counter on the Defending Pokémon.",
				de: "Lege eine Schadensmarke auf das verteidigende Pokémon."
			}

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85646,
				cardmarket: 275315
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85646,
				cardmarket: 275315
			},
		},
	],
}

export default card
