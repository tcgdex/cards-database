import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-5",
	localId: 5,

	// Card informations
	name: {
		en: "Gloom",
		fr: "Ortide",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/5/high",
		},
	},

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Stinky Scent",
			fr: "Parfum Nauséabond",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
