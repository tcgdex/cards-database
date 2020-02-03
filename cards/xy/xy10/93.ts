import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-93",
	localId: 93,

	// Card informations
	name: {
		en: "Bent Spoon",
		fr: "Cuiller Déformée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/93/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/93/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/93/high.png",
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
			fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés au Pokémon auquel cette carte est attachée. (Les effets déjà en action ne sont pas retirés.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

