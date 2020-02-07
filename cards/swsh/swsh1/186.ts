import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-186",
	localId: 186,

	// Card informations
	name: {
		en: "Aurora Energy",
		fr: "Énergie Boréale",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/186/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/186/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/186/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/186/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			en: "You can attach this card to 1 of your Pokémon only if you discard another card from your hand.\n\nAs long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time.",
			fr: "Vous ne pouvez attacher cette carte à l’un de vos Pokémon que si vous défaussez une autre carte de votre main.\n\nTant que cette carte est attachée à un Pokémon, elle fournit tout type d’Énergie mais seulement une Énergie à la fois.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

