import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-85",
	localId: 85,

	// Card informations
	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/85/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/85/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/85/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez 1 de vos Pokémon de base en jeu. Si vous avez dans votre main un Pokémon de Niveau 2 qui est une évolution du Pokémon choisi, placez-la sur le Pokémon de base. (Cela équivaut à faire évoluer le Pokémon.) Vous ne pouvez pas utiliser cette carte pendant votre premier tour ni sur un Pokémon de base qui a été joué pendant ce tour.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

