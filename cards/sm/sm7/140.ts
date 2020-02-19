import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm7/140/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/140/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/140/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/140/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 3 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon ou une carte Énergie que vous y trouvez et l’ajouter à votre main. Replacez les autres cartes dans l’ordre de votre choix.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

