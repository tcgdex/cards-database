import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-134",
	localId: 134,

	// Card informations
	name: {
		en: "Snowpoint Temple",
		fr: "Temple Frimapic",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/134/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/134/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/134/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Chaque Pokémon en jeu qui n'est pas un Pokémon Évolué (parmi les vôtres et ceux de votre adversaire) obtient + 20 PV.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
