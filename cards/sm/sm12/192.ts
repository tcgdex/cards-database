import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-192",
	localId: 192,

	// Card informations
	name: {
		en: "Great Catcher",
		fr: "Attrape-Suprême",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/192/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/192/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/192/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/192/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 121,
		name: "Studio Bora Inc."
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nÉchangez l’un des Pokémon-GX ou Pokémon-EX de Banc de votre adversaire avec son Pokémon Actif.",
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

