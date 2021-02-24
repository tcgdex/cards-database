import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Électhor",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		145,
	],
	hp: 110,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunderous Assault",
				fr: "Assaut Orageux",
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 70 more damage. This attack's damage isn't affected by Weakness.",
				fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 70 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
