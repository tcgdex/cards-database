import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-167",
	localId: 167,

	// Card informations
	name: {
		en: "Lucky Egg",
		fr: "Œuf Chance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/167/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/167/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Studio Bora Inc.",



	attacks: [{
		name: {},
		text: {
			en: "If the Pokémon this card is attached to is Knocked Out by damage from an opponent’s attack, draw cards until you have 7 cards in your hand.",
			fr: "Si le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d’une attaque de l’adversaire, piochez des cartes jusqu’à en avoir 7 en main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
