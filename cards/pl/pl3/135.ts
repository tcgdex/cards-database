import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-135",
	localId: 135,

	// Card informations
	name: {
		en: "Champion's Room",
		fr: "Salle de Maître",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/135/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/135/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/135/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Yusuke Ishikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Le Coût de retraite de chaque Pokémon SP (les vôtres et ceux de votre adversaire) est Colorless de moins.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
