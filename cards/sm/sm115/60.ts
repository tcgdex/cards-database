import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-60",
	localId: 60,

	// Card informations
	name: {
		en: "Lt. Surge's Strategy",
		fr: "Stratégie de Major Bob",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/60/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/60/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que s’il vous reste plus de cartes Récompense qu’à votre adversaire.\n\nPendant ce tour, vous pouvez jouer 3 cartes Supporter (y compris cette carte).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
