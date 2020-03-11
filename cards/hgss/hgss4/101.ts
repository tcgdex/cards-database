import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss4/101/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/101/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣+江場左知子",



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
