import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-24",
	localId: 24,

	// Card informations
	name: {
		en: "Rapidash",
		fr: "Galopa",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 78,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/24/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/24/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/24/high",
		},
	},

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Misa Tsutsui",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Overrun",
			fr: "Dépassement",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flame Tail",
			fr: "Queue de Flammes",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
