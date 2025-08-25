import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

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
		fr: "Lancez une pièce. Si c'est face, choisissez 1 de vos Pokémon (sauf les Pokémon-ex) et retirez-lui tout État Spécial ainsi que 6 marqueurs de dégât (ou tous s'il y en a moins que 6.)",
		de: "Flip a coin. If heads, choose 1 of your Pokémon (excluding Pokémon-ex) , and remove all Spezial Conditions and 6 damage counters from thad Pokémon (all if there are less than 6)."
	},

	thirdParty: {
		cardmarket: 276269,
		tcgplayer: 86731
	}
}

export default card
