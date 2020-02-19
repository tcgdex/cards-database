import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-99",
	localId: 99,

	// Card informations
	name: {
		en: "Darkrai & Cresselia LEGEND",
		fr: "Darkrai & Cresselia LÉGENDE",
	},

	hp: 150,

	type: [
		Type.DARKNESS,
		Type.PSYCHIC,
	],

	dexId: 488,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/99/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/99/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/99/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: {
		id: 118,
		name: "Shinji Higuchi + Noriko Takaya/樋口真嗣+高屋法子"
	},



	attacks: [{
		name: {
			fr: "",
		},
		text: {
			fr: "Placez cette carte sur votre Banc uniquement avec l'autre moitié de Darkrai & Cresselia LÉGENDE.",
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

