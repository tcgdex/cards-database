import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-226",
	localId: 226,

	// Card informations
	name: {
		en: "Whimsicott-GX",
	},

	hp: 190,

	type: [
		Type.FAIRY,
	],

	dexId: 547,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/226/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/226/high",
		},
	},

	evolveFrom: {
		en: "Cottonee",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 141,
		name: "PLANETA Igarashi"
	},

	abilities: [{
		id: 495,
		type: AbilityType.TALENT,
		name: {
			en: "Fluffy Cotton",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Energy Blow",
		},
		text: {
			en: "This attack does 30 more damage times the amount of Energy attached to this Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Toy Box-GX",
		},
		text: {
			en: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
