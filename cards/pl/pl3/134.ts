import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-134",
	localId: 134,

	// Card informations
	name: {
		en: "Battle Tower",
		fr: "Tour de Combat",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/134/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/134/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/134/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Lorsque n'importe quel joueur joue un Pokémon de sa main pour faire passer 1 de ses Pokémon au Niveau Supérieur, retirez à ce Pokémon 4 marqueurs de dégât.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
