import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-22",
	localId: 22,

	// Card informations
	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/22/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/22/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/22/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Grand Flame",
			fr: "Flamme Colossale",
		},
		text: {
			en: "Attach 2 Fire Energy cards from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez 2 cartes Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 120
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
		},
		text: {
			en: "This Pokémon does 50 damage to itself.",
			fr: "Ce Pokémon s’inflige 50 dégâts.",
		},
		damage: 190
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
