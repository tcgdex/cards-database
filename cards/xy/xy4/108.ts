import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-108",
	localId: 108,

	// Card informations
	name: {
		en: "Trick Coin",
		fr: "Pièce Faussée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/108/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/108/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/108/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant votre tour, après avoir lancé des pièces pour une attaque du Pokémon auquel cette carte est attachée, vous pouvez ignorer les effets de ces lancers de pièce et lancer ces pièces à nouveau. (Vous ne pouvez utiliser des effets qui vous laissent lancer des pièces à nouveau, y compris les effets d'autres cartes, qu'une seule fois pendant votre tour.)",
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

