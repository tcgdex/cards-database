import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl1/111/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/111/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/111/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/111/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



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







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

