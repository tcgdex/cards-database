import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-106",
	localId: 106,

	// Card informations
	name: {
		en: "Target Whistle Team Flare Gear",
		fr: "Sifflet de Rappel Matos Team Flare",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/106/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/106/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/106/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

