import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma Admin",
		'fr-fr': "Admin Team Magma",
		'pt-br': "Admin. da Equipe Magma",
	},

	illustrator: "GAME FREAK inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Ajoutez jusqu'à 3 Pokémon de la Team Magma de votre pile de défausse à votre main.",
		'en-us': "Put up to 3 Team Magma Pokémon from your discard pile into your hand.",
		'pt-br': "Coloque até 3 Pokémon da Equipe Magma da sua pilha de descarte em sua mão.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 282540,
		tcgplayer: 97075
	}
}

export default card
