import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-96",
	localId: 96,

	// Card informations
	name: {
		en: "Team Galactic's Invention G-109 SP Radar",
		fr: "Radar SP Invention G-109 de Team Galaxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/96/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/96/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/96/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte dans votre main et placez-la au dessus de votre deck. Choisissez un Pokémon SP dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. (Si c'est la seule carte que vous avez en main, vous ne pouvez pas la jouer).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

