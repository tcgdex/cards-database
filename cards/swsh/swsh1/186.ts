import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swsh1'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `${set.code}-${localId}`,
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
			},


	},



	tags: [
		Tag.SPECIAL,
	],




	effect: {
		en: "You can attach this card to 1 of your Pokémon only if you discard another card from your hand.\n\nAs long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time.",
	},




	rarity: Rarity.Uncommon, 

	category: Category.ENERGY, 


	set,
}

export default card