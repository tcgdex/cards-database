import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-199",
	localId: 199,

	// Card informations
	name: {
		en: "Misty & Lorelei",
		fr: "Ondine et Olga",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/199/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/199/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/199/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/199/high",
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
			fr: "Cherchez jusqu’à 3 cartes Énergie Water dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.\n\nLorsque vous jouez cette carte, vous pouvez défausser 5 autres cartes de votre main. Dans ce cas, pendant ce tour, vos Pokémon Water peuvent utiliser leurs attaques GX même si vous avez déjà utilisé votre attaque GX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
