import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Aqua Diffuser",
		fr: "Diffuseur Aqua",
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Le Pokémon de la Team Aqua auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		en: "The Team Aqua Pokémon this card is attached to can also use the attack on this card. (You still need the necessary Energy to use this attack.)"
	},

	trainerType: "Tool",

	attacks: [{
		name: {
			en: "Aqua Diffuser"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned."
		},

		cost: ["Water"]
	}],

	thirdParty: {
		cardmarket: 282534,
		tcgplayer: 97069
	}
}

export default card
