import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Magma Pointer",
		fr: "Pointeur Magma",
		pt: "Ponteiro Magma",
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Le Pokémon de la Team Magma auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		en: "The Team Magma Pokémon this card is attached to can also use the attack on this card. (You still need the necessary Energy to use this attack.)",
		pt: "O Pokémon da Equipe Magma ao qual este card está ligado também pode usar o ataque neste card. (Você ainda precisa da Energia necessaria para usar o ataque.)",
	},

	trainerType: "Tool",

	attacks: [{
		name: {
			en: "Magma Pointer",
			pt: "Ponteiro Magma",
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			pt: "Este ataque causa 20 de danos a I dos Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
		},

		cost: ["Fighting"]
	}],

	thirdParty: {
		cardmarket: 282535,
		tcgplayer: 97070
	}
}

export default card
