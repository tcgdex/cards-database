import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-99",
	localId: 99,

	// Card informations
	name: {
		en: "Captivating Poké Puff",
		fr: "Pofiterole Envoûtante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/99/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/99/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/99/high.png",
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
			fr: "Votre adversaire montre sa main. Placez tout nombre de Pokémon de base que vous y trouvez sur le Banc de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

