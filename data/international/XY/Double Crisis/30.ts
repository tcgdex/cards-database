import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma Grunt",
		'fr-fr': "Sbire de la Team Magma",
		'pt-br': "Operário da Equipe Magma",
	},

	illustrator: "GAME FREAK inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez une carte de votre main. (Si vous ne pouvez pas défausser de carte, vous ne pouvez pas jouer cette carte.) Piochez 3 cartes. Si vous avez défaussé un Pokémon de la Team Magma, piochez une carte supplémentaire.",
		'en-us': "Discard a card from your hand. (If you can't discard a card, you can't play this card.) Draw 3 cards. If you discarded a Team Magma Pokémon, draw 1 more card.",
		'pt-br': "Descarte um card da sua mão. (Se você não puder descartar um card, não poderá jogar esse card.) Compre 3 cards. Se você descartou um Pokémon da Equipe Magma, compre mais 1 card.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 282541,
		tcgplayer: 97076
	}
}

export default card
