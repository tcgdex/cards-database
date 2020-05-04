import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Relicanth",
		fr: "Relicanth",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 369,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/69/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/69/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Prehistoric Wisdom",
			fr: "Sagesse préhistorique",
		},
		text: {
			en: "Choose a card from your hand and put it in the Lost Zone. Then, draw 3 cards.",
			fr: "Choisissez une carte de votre main et placez-la dans la Zone Perdue. Ensuite, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Granite Head",
			fr: "Tête de granit",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Relicanth by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Pendant le tour suivant de votre adversaire, les dégâts infligés par des attaques à Relicanth sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
