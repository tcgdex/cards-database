import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-42",
	localId: 42,

	dexId: 98,

	// Card informations
	name: {
		en: "Krabby",
		fr: "Krabby",
	},

	hp: 80,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/42/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/42/low",
		}
	},

	evolveTo: [{
		en: "Kingler",
		fr: "Krabboss",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: "ryoma uratsuka",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Aqua Shower",
			fr: "Aqua-Douche",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
