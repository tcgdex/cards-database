import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-89",
	localId: 89,

	// Card informations
	name: {
		en: "Rayquaza & Deoxys LEGEND",
		fr: "Rayquaza & Deoxys LÉGENDE",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
		Type.PSYCHIC,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/89/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/89/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/89/high.png",
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
			fr: "Placez cette carte sur votre Banc uniquement avec l'autre moitié de Rayquaza & Deoxys LÉGENDE.",
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

