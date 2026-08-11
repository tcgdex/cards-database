import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Aqua Diffuser",
		'fr-fr': "Diffuseur Aqua",
		'pt-br': "Difusor Aqua",
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Pokémon de la Team Aqua auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		'en-us': "The Team Aqua Pokémon this card is attached to can also use the attack on this card. (You still need the necessary Energy to use this attack.)",
		'pt-br': "O Pokémon da Equipe Aqua ao qual este card está ligado também pode usar o ataque neste card. (Você ainda precisa da Energia necessária para usar o ataque.)",
	},

	trainerType: "Tool",

	attacks: [{
		name: {
			'en-us': "Aqua Diffuser",
			'pt-br': "Difusor Aqua",
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado,"
		},

		cost: ["Water"]
	}],

	thirdParty: {
		cardmarket: 282534,
		tcgplayer: 97069
	}
}

export default card
