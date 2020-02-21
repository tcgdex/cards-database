import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-63",
	localId: 63,

	// Card informations
	name: {
		en: "Pokémon Breeder",
		fr: "Éleveuse de Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 2 cartes et soignez 20 dégâts à votre Pokémon Actif. Si votre deck ne contient aucune carte, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
