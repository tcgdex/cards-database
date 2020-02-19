import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-101",
	localId: 101,

	// Card informations
	name: {
		en: "Palkia & Dialga LEGEND",
		fr: "Palkia & Dialga LÉGENDE",
	},

	hp: 160,

	type: [
		Type.WATER,
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/101/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/101/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/101/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: {
		id: 181,
		name: "Shinji Higuchi + Sachiko Eba/樋口真嗣+江場左知子"
	},



	attacks: [{
		name: {
			fr: "",
		},
		text: {
			fr: "Vous ne pouvez placer cette carte sur votre Banc que si vous placez en même temps l'autre moitié de Palkia & Dialga LÉGENDE.",
		},
	}],







	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

