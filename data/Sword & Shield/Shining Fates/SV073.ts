import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Krakos",
		en: "Grapploct"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Poulpaf",
		en: "Clobbopus"
	},

	attacks: [{
		name: {
			fr: "Octoprise",
			en: "Octolock"
		},

		effect: {
			fr: "Tant que ce Krakos est sur le Poste Actif, les attaques du Pokémon Défenseur coûtent ColorlessColorless de plus, et le Pokémon Défenseur ne peut pas battre en retraite. Cet effet n’est applicable qu’une fois.",
			en: "Until this Grapploct leaves the Active Spot, the Defending Pokémon’s attacks cost ColorlessColorless more, and the Defending Pokémon can’t retreat. This effect can’t be applied more than once."
		},

		cost: ["Fighting", "Fighting"]
	}, {
		name: {
			fr: "Frappe Solide",
			en: "Tough Swing"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			en: "This attack’s damage isn’t affected by Resistance."
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card