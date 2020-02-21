import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-244",
	localId: 244,

	// Card informations
	name: {
		en: "Aerodactyl-GX",
	},

	hp: 210,

	type: [
		Type.FIGHTING,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/244/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/244/high",
		},
	},

	evolveFrom: {
		en: "UnidentifiedFossil",
	},

	tags: [
		Tag.STAGE1,
	],



	abilities: [{
		id: 924,
		type: AbilityType.TALENT,
		name: {
			en: "Primal Winds",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost {C} more.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Boulder Crush",
		},
		damage: 120
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Wild Dive GX",
		},
		text: {
			en: "This attack does 50 damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
