import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-185",
	localId: 185,

	// Card informations
	name: {
		en: "Beastite",
		fr: "Chimérite",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/185/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/185/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/185/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/185/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "inose yukie",



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques de l’Ultra-Chimère à laquelle cette carte est attachée infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chaque carte Récompense que vous avez récupérée (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
