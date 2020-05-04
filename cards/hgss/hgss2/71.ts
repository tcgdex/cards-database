import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-71",
	localId: 71,

	// Card informations
	name: {
		en: "Cheerleader's Cheer",
		fr: "Encouragements hystériques",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/71/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/71/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Piochez 3 cartes. Votre adversaire peut piocher une carte.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
