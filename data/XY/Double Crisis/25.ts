import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua Admin",
		fr: "Admin Team Aqua",
		pt: "Admin. da Equipe Aqua",
	},

	illustrator: "GAME FREAK inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez une carte Énergie de base de votre pile de défausse à votre Pokémon Actif de la Team Aqua.",
		en: "Attach a basic Energy card from your discard pile to your Active Team Aqua Pokémon.",
		pt: "Ligue um card de Energia básica da sua pilha de descarte ao seu Pokémon da Equipe Aqua Ativo.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 282536,
		tcgplayer: 97071
	}
}

export default card
