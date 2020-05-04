import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy10/93/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/93/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés au Pokémon auquel cette carte est attachée. (Les effets déjà en action ne sont pas retirés.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
