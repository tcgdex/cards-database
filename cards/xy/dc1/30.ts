import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-30",
	localId: 30,

	// Card informations
	name: {
		en: "Team Magma Grunt",
		fr: "Sbire de la Team Magma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/30/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/30/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "GAME FREAK inc.",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez une carte de votre main. (Si vous ne pouvez pas défausser de carte, vous ne pouvez pas jouer cette carte.) Piochez 3 cartes. Si vous avez défaussé un Pokémon de la Team Magma, piochez une carte supplémentaire.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
