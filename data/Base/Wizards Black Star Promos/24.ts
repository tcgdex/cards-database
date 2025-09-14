import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "___________'s Pikachu",
		fr: "Pikachu de ________"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Birthday Surprise",
				fr: "Surprise d'anniversaire"
			},
			effect: {
				en: "If it's not your birthday, this attack does 30 damage. If it is your birthday, flip a coin. If heads, this attack does 30 damage plus 50 more damage; if tails, this attack does 30 damage.",
				fr: "Si ce n'est pas votre anniversaire, cette attaque inflige 30 dégâts. Si c'est votre anniversaire, lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires ; si c'est pile, cette attaque inflige 30 dégâts."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,

	description: {
		fr: "Votre anniversaire : _________________________________________"
	},

	variants: [
		{
			type: "holo",
			stamp: ["pikachu-tail"]
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	]
}

export default card
