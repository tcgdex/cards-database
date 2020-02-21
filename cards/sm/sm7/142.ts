import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-142",
	localId: 142,

	// Card informations
	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/142/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/142/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/142/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’un de vos Pokémon de base en jeu. Si vous avez dans votre main une carte de Niveau 2 qui évolue de ce Pokémon, placez-la sur le Pokémon de base pour le faire évoluer. Vous ne pouvez utiliser cette carte ni pendant votre premier tour ni sur un Pokémon de base qui a été joué pendant ce tour.",
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
