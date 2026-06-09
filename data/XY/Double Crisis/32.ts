import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Secret Base",
		fr: "Base Secrète de la Team Magma",
		pt: "Base Secreta da Equipe Magma",
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque fois qu'un joueur place un Pokémon de base (à part les Pokémon de la Team Magma) de sa main sur son Banc, placez 2 marqueurs de dégâts sur ce Pokémon.",
		en: "Whenever any player puts a Basic Pokémon (except for Team Magma Pokémon) from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
		pt: "Sempre que um jogador colocar um Pokémon Básico (exceto Pokémon da Equipe Magma) da própria mão no Banco, coloque 2 contadores de danos nesse Pokémon.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 282543,
		tcgplayer: 97078
	}
}

export default card
