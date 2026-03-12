import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Aqua Diffuser",
		fr: "Diffuseur Aqua",
		pt: "Difusor Aqua",
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Le Pokémon de la Team Aqua auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		en: "The Team Aqua Pokémon this card is attached to can also use the attack on this card. (You still need the necessary Energy to use this attack.)",
		pt: "O Pokémon da Equipe Aqua ao qual este card está ligado também pode usar o ataque neste card. (Você ainda precisa da Energia necessária para usar o ataque.)",
	},

	trainerType: "Tool",

	attacks: [{
		name: {
			en: "Aqua Diffuser",
			pt: "Difusor Aqua",
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado,"
		},

		cost: ["Water"]
	}],

	thirdParty: {
		cardmarket: 282534,
		tcgplayer: 97069
	}
}

export default card
