import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-13",
	localId: 13,

	// Card informations
	name: {
		en: "Slaking",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 289,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/13/high",
		},
	},

	evolveFrom: {
		en: "Vigoroth",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 615,
		type: AbilityType.POKEBODY,
		name: {
			en: "Lazy",
		},
		text: {
			en: "As long as Slaking is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Critical Move",
		},
		text: {
			en: "Discard a basic Energy card attached to Slaking or this attack does nothing. Slaking can't attack during your next turn.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
