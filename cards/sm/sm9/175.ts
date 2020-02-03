import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-175",
	localId: 175,

	// Card informations
	name: {
		en: "Evelyn",
		fr: "Vesper",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/175/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/175/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/175/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/175/high.png",
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
			fr: "Vous ne pouvez jouer cette carte que si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 1.\n\nPiochez 4 cartes.",
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

