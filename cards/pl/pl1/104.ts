import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-104",
	localId: 104,

	// Card informations
	name: {
		en: "Broken Time-Space",
		fr: "Espace-Temps brisé",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/104/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/104/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/104/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur peut faire évoluer un Pokémon qu'il ou elle a joué ou fait évolué ce tour-ci.",
		},
	},{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

