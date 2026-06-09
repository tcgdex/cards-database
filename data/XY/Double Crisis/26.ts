import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua Grunt",
		fr: "Sbire de la Team Aqua",
		pt: "Operário da Equipe Aqua",
	},

	illustrator: "GAME FREAK inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une carte de votre main. (Si vous ne pouvez pas défausser de carte, vous ne pouvez pas jouer cette carte.) Piochez 3 cartes. Si vous avez défaussé un Pokémon de la Team Aqua, piochez une carte supplémentaire.",
		en: "Discard a card from your hand. (If you can't discard a card, you can't play this card.) Draw 3 cards. If you discarded a Team Aqua Pokémon, draw 1 more card.",
		pt: "Descarte um card da sua mão. (Se você não puder descartar um card, não poderá jogar esse card.) Compre 3 cards. Se você descartou um Pokémon da Equipe Aqua, compre mais 1 card.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 282537,
		tcgplayer: 97072
	}
}

export default card
