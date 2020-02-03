import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-180",
	localId: 180,

	// Card informations
	name: {
		en: "Nita",
		fr: "Nix",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/180/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/180/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/180/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/180/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si le Pokémon Actif de votre adversaire est un Pokémon de base.\n\nPlacez une Énergie du Pokémon Actif de votre adversaire sur le dessus de son deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

