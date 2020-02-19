import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl1/106/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/106/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/106/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 84,
		name: "Ryota Saito"
	},



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

