import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Hyper Devolution Spray",
		'fr-fr': "Vaporisateur hyper rétrograde",
		'de-de': "Hyper-Rückentwicklungs-Spray"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Choose 1 of your evolved Pokémon. Take the highest Stage Evolution card from that Pokémon and put it into your hand. (You can't evolve a Pokémon the turn you devolve it.)",
		'fr-fr': "Choisissez 1 de vos Pokémon évolués. Prenez la carte Évolution de niveau le plus élevé de ce Pokémon et replacez-la dans votre main. (Vous ne pouvez pas faire évoluer un Pokémon pendant le tour où il est rétrogradé.)",
		'de-de': "Choose 1 of your evolved Pokémon. Take the highest Stage Evolution card from that Pokémon and put it into your hand. (You can't evolve a Pokémon the turn you devolve it.)"
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274584,
				tcgplayer: 86245
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274584,
				tcgplayer: 86245
			}
		}
	]
}

export default card

