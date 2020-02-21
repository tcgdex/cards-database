import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-26",
	localId: 26,

	// Card informations
	name: {
		en: "Delibird",
		fr: "Cadoizo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 225,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/26/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/26/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "All the Presents",
			fr: "Nombreux Cadeaux",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, vous pouvez chercher une carte dans votre deck puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
