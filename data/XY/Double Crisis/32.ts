import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Secret Base",
		fr: "Base Secrète de la Team Magma",
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque fois qu'un joueur place un Pokémon de base (à part les Pokémon de la Team Magma) de sa main sur son Banc, placez 2 marqueurs de dégâts sur ce Pokémon.",
		en: "Whenever any player puts a Basic Pokémon (except for Team Magma Pokémon) from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 282543
	}
}

export default card
