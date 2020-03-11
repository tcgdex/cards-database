import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-264",
	localId: 264,

	// Card informations
	name: {
		en: "Great Catcher",
		fr: "Attrape-Suprême",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/264/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/264/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/264/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/264/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Studio Bora Inc.",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nÉchangez l’un des Pokémon-GX ou Pokémon-EX de Banc de votre adversaire avec son Pokémon Actif.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
