import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss3/87/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/87/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣 + 江場左知子",



	attacks: [{
		name: {
			fr: "",
		},
		text: {
			fr: "Placez cette carte sur votre Banc uniquement avec l'autre moitié de Kyogre & Groudon LÉGENDE.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
