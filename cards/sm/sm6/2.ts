import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-2",
	localId: 2,

	// Card informations
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
	},

	hp: 160,

	type: [
		Type.GRASS,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/2/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/2/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/2/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Tropical Shake",
			fr: "Balancement Tropical",
		},
		text: {
			en: "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can't add more than 100 damage in this way.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque type de carte Énergie de base dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
