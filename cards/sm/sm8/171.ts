import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-171",
	localId: 171,

	// Card informations
	name: {
		en: "Custom Catcher",
		fr: "Attrape-Perso",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/171/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/171/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/171/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/171/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer 2 cartes Attrape-Perso à la fois.\n\n• Si vous avez joué une carte, piochez des cartes jusqu’à ce que vous ayez 3 cartes en main.\n• Si vous avez joué 2 cartes, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. (Cet effet agit une fois pour 2 cartes.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
