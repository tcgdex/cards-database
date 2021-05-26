import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Krakos"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Poulpaf"
	},

	attacks: [{
		name: {
			fr: "Octoprise"
		},

		effect: {
			fr: "Tant que ce Krakos est sur le Poste Actif, les attaques du Pokémon Défenseur coûtent ColorlessColorless de plus, et le Pokémon Défenseur ne peut pas battre en retraite. Cet effet n’est applicable qu’une fois."
		},

		cost: ["Fighting", "Fighting"]
	}, {
		name: {
			fr: "Frappe Solide"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
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