import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma Admin",
		fr: "Admin Team Magma",
		pt: "Admin. da Equipe Magma",
	},

	illustrator: "GAME FREAK inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Ajoutez jusqu'à 3 Pokémon de la Team Magma de votre pile de défausse à votre main.",
		en: "Put up to 3 Team Magma Pokémon from your discard pile into your hand.",
		pt: "Coloque até 3 Pokémon da Equipe Magma da sua pilha de descarte em sua mão.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 282540,
		tcgplayer: 97075
	}
}

export default card
