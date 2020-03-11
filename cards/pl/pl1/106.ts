import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Galactic HQ",
		fr: "QG Galaxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/106/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/106/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryota Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Lorsqu'1 des joueurs joue un Pokémon de sa main pour faire évoluer son Pokémon, placez 2 marqueurs de dégât sur ce Pokémon.",
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
