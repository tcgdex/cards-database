import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-89",
	localId: 89,

	// Card informations
	name: {
		en: "Twins",
		fr: "Jumelles",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/89/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/89/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Vous pouvez utiliser cette carte uniquement s'il vous reste plus de cartes Récompense que votre adversaire. Cherchez 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
