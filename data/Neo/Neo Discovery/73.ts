import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Hyper Devolution Spray",
		fr: "Vaporisateur hyper rétrograde",
		de: "Hyper-Rückentwicklungs-Spray"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 de vos Pokémon évolués. Prenez la carte Évolution de niveau le plus élevé de ce Pokémon et replacez-la dans votre main. (Vous ne pouvez pas faire évoluer un Pokémon pendant le tour où il est rétrogradé.)",
		de: "Choose 1 of your evolved Pokémon. Take the highest Stage Evolution card from that Pokémon and put it into your hand. (You can't evolve a Pokémon the turn you devolve it.)"
	},

	thirdParty: {
		cardmarket: 274584,
		tcgplayer: 86245
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

