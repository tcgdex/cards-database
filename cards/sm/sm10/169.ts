import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-169",
	localId: 169,

	// Card informations
	name: {
		en: "Electromagnetic Radar",
		fr: "Radar Électromagnétique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/169/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/169/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/169/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/169/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nCherchez une combinaison d’un maximum de 2 Pokémon-GX Lightning et Pokémon-EX Lightning, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

