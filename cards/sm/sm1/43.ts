import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-43",
	localId: 43,

	// Card informations
	name: {
		en: "Crabominable",
		fr: "Crabominable",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 740,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/43/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/43/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/43/high",
		},
	},

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Avalanche",
			fr: "Avalanche",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Hammer",
			fr: "Marteau de Glace",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
