import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-108",
	localId: 108,

	// Card informations
	name: {
		en: "Power Memory",
		fr: "Puissante Mémoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/108/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/108/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Le Zygarde-EX auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)\n\nBrûlure Polycellule FightingFightingColorless 200\nDéfaussez 3 Énergies attachées à ce Pokémon.",
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
