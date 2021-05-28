import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Grapploct",
		fr: "Krakos",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Clobbopus",
		fr: "Poulpaf",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Octolock",
				fr: "Octoprise",
			},
			effect: {
				en: "Until this Grapploct leaves the Active Spot, the Defending Pokémon's attacks cost ColorlessColorless more, and the Defending Pokémon can't retreat. This effect can't be applied more than once.",
				fr: "Tant que ce Krakos est sur le Poste Actif, les attaques du Pokémon Défenseur coûtent ColorlessColorless de plus, et le Pokémon Défenseur ne peut pas battre en retraite. Cet effet n’est applicable qu’une fois.",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Tough Swing",
				fr: "Frappe Solide",
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
