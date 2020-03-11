import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-13",
	localId: 13,

	// Card informations
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/13/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/13/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/13/high",
		},
	},

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
