import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Meganium",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 154,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/18/high",
		},
	},

	evolveFrom: {
		en: "Bayleef",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 301,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Soothing Aroma",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, remove 1 damage counter from each of your Pokémon that has any. This power can't be used if Meganium is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poisonpowder",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
