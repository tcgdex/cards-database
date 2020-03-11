import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl1/104/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/104/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Kent Kanetsuna",



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
