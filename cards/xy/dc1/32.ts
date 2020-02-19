import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Team Magma's Secret Base",
		fr: "Base Secrète de la Team Magma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/32/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/32/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/32/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque fois qu'un joueur place un Pokémon de base (à part les Pokémon de la Team Magma) de sa main sur son Banc, placez 2 marqueurs de dégâts sur ce Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card

