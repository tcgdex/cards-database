import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Grapploct",
		fr: "Krakos"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Clobbopus",
		fr: "Poulpaf"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Stranglehold Master",
			fr: "Emprise Magistrale"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon’s Retreat Cost is ColorlessColorless more.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de ColorlessColorless."
		}
	}],

	attacks: [{
		name: {
			en: "Synchro Buster",
			fr: "Buster Synchro"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: "80+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card