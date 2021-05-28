import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Aurora Energy",
		fr: "Énergie Boréale",
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "You can attach this card to 1 of your Pokémon only if you discard another card from your hand.\n\nAs long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time.",
		fr: "Vous ne pouvez attacher cette carte à l’un de vos Pokémon que si vous défaussez une autre carte de votre main.\n\nTant que cette carte est attachée à un Pokémon, elle fournit tout type d’Énergie mais seulement une Énergie à la fois."
	},

	energyType: "Special",
	regulationMark: "D"
}

export default card
