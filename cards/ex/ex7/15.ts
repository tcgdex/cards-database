import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-15",
	localId: 15,

	// Card informations
	name: {
		en: "Dark Dragonite",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/15/high",
		},
	},

	evolveFrom: {
		en: "Dark Dragonair",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},

	abilities: [{
		id: 159,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dark Trance",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Darkness Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Dark Dragonite is affected by a Special Condition.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Double Wing Attack",
		},
		text: {
			en: "Does 30 damage to each Defending Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Swipe",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
