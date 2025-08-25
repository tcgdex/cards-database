import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Life Herb",
		fr: "Herbe sauveuse",
		de: "Lebenskräuter"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez 1 de vos Pokémon (Pokémon-ex exclus). Retirez à ce Pokémon tous ses États Spéciaux et 6 marqueurs de dégât (retirez-les lui tous s'il en a moins de 6).",
		de: "Flip a coin. If heads, choose 1 of your Pokémon (excluding Pokémon-ex). Remove all Special Conditions and 6 damage counters from that Pokémon (all if there are less than 6)."
	},

	thirdParty: {
		cardmarket: 276164,
		tcgplayer: 86730
	}
}

export default card
