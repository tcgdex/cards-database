import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "PokéDex (HANDY909)",
		fr: "Pokédex",
		de: "PokéDex HANDY909"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Mélangez votre deck. Regardez les 6 cartes du dessus de votre deck puis remettez-les dans votre deck dans n'importe quel ordre.",
		de: "Shuffle your deck. Look at 6 cards from the top of your deck, then put them back on top of your deck in any order."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
