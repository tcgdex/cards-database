import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-55",
	localId: 55,

	// Card informations
	name: {
		en: "Brock's Training",
		fr: "Entraînement de Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez une carte Énergie de votre main à l’un de vos Racaillou, Gravalanch, Grolem, Onix-GX, Osselait, Rhinocorne, Rhinoféros ou Simularbre.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
