import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Secret Base",
		fr: "Base Secrète de la Team Aqua",
		pt: "Base Secreta da Equipe Aqua",
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Le Coût de Retraite de chaque Pokémon en jeu (à part les Pokémon de la Team Aqua) est augmenté de Colorless.",
		en: "The Retreat Cost of each Pokémon in play (except for Team Aqua Pokémon) is Colorless more.",
		pt: "O Custo para Recuar de cada um dos Pokémon em jogo (exceto os Pokémon da Equipe Aqua) será de Incolor a mais.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 282539,
		tcgplayer: 97074
	}
}

export default card
