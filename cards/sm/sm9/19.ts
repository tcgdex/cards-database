import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-19",
	localId: 19,

	// Card informations
	name: {
		en: "Moltres",
		fr: "Sulfura",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/19/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/19/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Top Burner",
			fr: "Super Pyro",
		},
		text: {
			en: "Discard all Fire Energy from this Pokémon. Then, discard a card from the top of your opponent's deck for each Energy you discarded in this way.",
			fr: "Défaussez toute l’Énergie Fire de ce Pokémon. Ensuite, défaussez une carte du dessus du deck de votre adversaire pour chaque Énergie défaussée de cette façon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Spin",
			fr: "Danse Flamme",
		},
		text: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
