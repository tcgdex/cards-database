import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/186/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/186/low",
		}
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
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
