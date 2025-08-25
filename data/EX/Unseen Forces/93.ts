import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Warp Point",
		fr: "Point d'échange",
		de: "Wurmloch"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Votre adversaire échange 1 de ses Pokémon Défenseurs avec 1 de ses Pokémon de Banc, s'il en a. Vous échangez 1 de vos Pokémon Actifs avec 1 de vos Pokémon de Banc, si vous en avez.",
		de: "Your opponent switches 1 of his or her Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch 1 of your Active Pokémon with 1 of your Benched Pokémon, if any."
	},

	thirdParty: {
		cardmarket: 276739,
		tcgplayer: 90479
	}
}

export default card
