import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-26",
	localId: 26,

	// Card informations
	name: {
		en: "Team Aqua Grunt",
		fr: "Sbire de la Team Aqua",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/26/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/26/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/26/high",
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
			fr: "Défaussez une carte de votre main. (Si vous ne pouvez pas défausser de carte, vous ne pouvez pas jouer cette carte.) Piochez 3 cartes. Si vous avez défaussé un Pokémon de la Team Aqua, piochez une carte supplémentaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
