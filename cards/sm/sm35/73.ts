import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm35/73/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/73/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Sanosuke Sakuma",



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
