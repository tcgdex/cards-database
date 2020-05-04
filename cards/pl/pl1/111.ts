import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-111",
	localId: 111,

	// Card informations
	name: {
		en: "Miasma Valley",
		fr: "Vallée miasme",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/111/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/111/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/111/high",
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
			fr: "Lorsqu'1 joueur place un Pokémon de base (Pokémon Grass ou Psychic exclus) de sa main sur son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
