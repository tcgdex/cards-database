import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Capture Energy",
		fr: "Énergie Capture"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Colorless Energy.\n\n \n\nWhen you attach this card from your hand to a Pokémon, search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Colorless.\n\n \n\n\nLorsque vous attachez cette carte de votre main à un Pokémon, cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck."
	},

	energyType: "Special",
	regulationMark: "D"
}

export default card
