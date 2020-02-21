import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-92",
	localId: 92,

	// Card informations
	name: {
		en: "Dashing Pouch",
		fr: "Poche de Course",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée défausse de l’Énergie pour son Coût de Retraite, placez cette Énergie dans votre main plutôt que dans votre pile de défausse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
