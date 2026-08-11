import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Secret Base",
		'fr-fr': "Base Secrète de la Team Aqua",
		'pt-br': "Base Secreta da Equipe Aqua",
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Coût de Retraite de chaque Pokémon en jeu (à part les Pokémon de la Team Aqua) est augmenté de {C}.",
		'en-us': "The Retreat Cost of each Pokémon in play (except for Team Aqua Pokémon) is {C} more.",
		'pt-br': "O Custo para Recuar de cada um dos Pokémon em jogo (exceto os Pokémon da Equipe Aqua) será de {C} a mais.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 282539,
		tcgplayer: 97074
	}
}

export default card
