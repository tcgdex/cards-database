import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-87",
	localId: 87,

	// Card informations
	name: {
		en: "Kyogre & Groudon LEGEND",
		fr: "Kyogre & Groudon LÉGENDE",
	},

	hp: 150,

	type: [
		Type.WATER,
		Type.FIGHTING,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/87/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/87/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/87/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: {
		id: 177,
		name: "Shinji Higuchi + Sachiko Eba/樋口真嗣 + 江場左知子"
	},



	attacks: [{
		name: {
			fr: "",
		},
		text: {
			fr: "Placez cette carte sur votre Banc uniquement avec l'autre moitié de Kyogre & Groudon LÉGENDE.",
		},
	}],







	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

