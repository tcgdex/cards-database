import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-73",
	localId: 73,

	// Card informations
	name: {
		en: "Pokémon Breeder",
		fr: "Éleveuse de Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/73/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/73/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/73/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 2 cartes et soignez 20 dégâts à votre Pokémon Actif. Si votre deck ne contient aucune carte, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

