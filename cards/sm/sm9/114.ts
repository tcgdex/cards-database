import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-114",
	localId: 114,

	// Card informations
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/114/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/114/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/114/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



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
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
