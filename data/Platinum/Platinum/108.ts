import { Card } from '../../../interfaces'
import Set from '../Platinum'

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











	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez 1 de vos Pokémon et retirez-lui tous ses États Spéciaux ainsi que 6 marqueurs de dégât (retirez-les lui tous s'il en a moins de 6).",
		de: "Flip a coin. If heads, choose 1 of your Pokémon, and remove all Special Conditions and 6 damage counters from that Pokémon (all if there are less than 6)."
	},
	trainerType: "Item",

}

export default card
