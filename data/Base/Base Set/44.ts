import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		1,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine"
			},
			effect: {
				en: "Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.",
				fr: "À moins que tous les dégâts infligés par cette attaque ne soient prévenus, vous pouvez retirer 1 marqueur de dégâts de Bulbizarre."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il a une étrange graine plantée sur son dos. Elle grandit avec lui depuis la naissance."
	}
}

export default card
