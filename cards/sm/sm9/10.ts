import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-10",
	localId: 10,

	// Card informations
	name: {
		en: "Shaymin ◇",
		fr: "Shaymin ",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/10/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/10/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Flower Storm",
			fr: "Tempête de Fleurs",
		},
		text: {
			en: "This attack does 30 damage times the amount of basic Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies de base attachées à tous vos Pokémon.",
		},
		damage: "30×"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
