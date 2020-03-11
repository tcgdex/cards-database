import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-50",
	localId: 50,

	// Card informations
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 695,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/50/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/50/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/50/high",
		},
	},

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Random Spark",
			fr: "Étincelle Surprise",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Volt Switch",
			fr: "Change Éclair",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Lightning Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon Lightning de Banc.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
