import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flip Over",
				fr: "Faire ressort"
			},
			effect: {
				en: "Beldum does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
				fr: "Terhal s'inflige 10 dégâts. Vous ne pouvez pas appliquer la Faiblesse et la Résistance à ces dégâts."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
