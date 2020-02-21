import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-88",
	localId: 88,

	// Card informations
	name: {
		en: "Poké Blower +",
		fr: "Poké Blower +",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/88/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/88/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer 2 Poké Coup + en même temps. Si vous jouez 1 Poké Coup +, lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur 1 des Pokémon de votre adversaire. Si vous jouez 2 Poké Coup +, choisissez 1 des Pokémon de Banc de votre adversaire et échangez-le avec 1 de ses Pokémon Actifs.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
