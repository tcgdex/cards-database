import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/71/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/71/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/71/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



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







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

