import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/dc1/26/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/26/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/26/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 110,
		name: "GAME FREAK inc."
	},



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

