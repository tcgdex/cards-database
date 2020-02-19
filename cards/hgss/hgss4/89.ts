import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss4/89/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/89/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/89/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



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







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

