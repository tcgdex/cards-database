import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-36",
	localId: 36,

	// Card informations
	name: {
		en: "Poliwag",
		fr: "Ptitard",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 60,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 410,
		type: AbilityType.TALENT,
		name: {
			en: "Round 'n' Round",
			fr: "Tourne-Tourne",
		},
		text: {
			en: "You can use this Ability only if you go second. Once during your first turn (before your attack), you may leave your opponent's Active Pokémon Confused.",
			fr: "Vous ne pouvez utiliser ce talent que si vous jouez en second. Une seule fois pendant votre premier tour (avant votre attaque), vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Watering",
			fr: "Arrosage",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
