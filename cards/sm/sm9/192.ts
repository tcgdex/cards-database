import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-192",
	localId: 192,

	// Card informations
	name: {
		en: "Dangerous Drill",
		fr: "Perceuse Dangereuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/192/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/192/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/192/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/192/high",
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
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez un Pokémon Darkness de votre main.\n\nDéfaussez une carte Outil Pokémon ou une carte Énergie spéciale de l’un des Pokémon de votre adversaire, ou défaussez toute carte Stade en jeu.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
