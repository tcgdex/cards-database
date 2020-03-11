import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-75",
	localId: 75,

	// Card informations
	name: {
		en: "Legend Box",
		fr: "Boîte légendaire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/75/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/75/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Shizurow",



	attacks: [{
		name: {},
		text: {
			fr: "Dévoilez les 10 cartes du dessus de votre deck. Si vous dévoilez les deux moitiés d'un Pokémon LÉGENDE, placez ces cartes sur votre Banc et attachez toutes les cartes Énergie dévoilées à ce Pokémon LÉGENDE. Mélangez les autres cartes avec votre deck. (Vous ne pouvez jouer qu'un seul Pokémon LÉGENDE de cette façon.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
