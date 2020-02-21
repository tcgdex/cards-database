import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-202",
	localId: 202,

	// Card informations
	name: {
		en: "Red & Blue",
		fr: "Red et Blue",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/202/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/202/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/202/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/202/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck un Pokémon-GX qui évolue de l’un de vos Pokémon et placez-le sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck. (Vous ne pouvez utiliser cette carte ni pendant votre premier tour ni sur un Pokémon qui a été joué pendant ce tour.)\n\nLorsque vous jouez cette carte, vous pouvez défausser 2 autres cartes de votre main. Dans ce cas, cherchez jusqu’à 2 cartes Énergie de base dans votre deck et attachez-les au Pokémon que vous avez fait évoluer de cette façon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
