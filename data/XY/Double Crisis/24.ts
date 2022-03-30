import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Magma Pointer",
		fr: "Pointeur Magma",
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Le Pokémon de la Team Magma auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		en: "The Team Magma Pokémon this card is attached to can also use the attack on this card. (You still need the necessary Energy to use this attack.)"
	},

	trainerType: "Tool",

	attacks: [{
		name: {
			en: "Magma Pointer"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		cost: ["Fighting"]
	}]
}

export default card
