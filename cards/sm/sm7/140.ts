import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-140",
	localId: 140,

	// Card informations
	name: {
		en: "PokéNav",
		fr: "PokéNav",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/140/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/140/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/140/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/140/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Katsura Tabata",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 3 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon ou une carte Énergie que vous y trouvez et l’ajouter à votre main. Replacez les autres cartes dans l’ordre de votre choix.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
