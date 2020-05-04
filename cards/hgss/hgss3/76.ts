import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-76",
	localId: 76,

	// Card informations
	name: {
		en: "Ruins of Alph",
		fr: "Ruines d'Alph",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/76/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/76/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/76/high",
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
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas l'utiliser.",
		},
	},{
		name: {},
		text: {
			fr: "Chaque Pokémon en jeu n'a aucune Résistance.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
