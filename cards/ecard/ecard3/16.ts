import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-16",
	localId: 16,

	// Card informations
	name: {
		en: "Machamp",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/16/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 433,
		type: AbilityType.POKEBODY,
		name: {
			en: "Immunity",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks done to Machamp.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Drag Off",
		},
		text: {
			en: "Before doing damage, if your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. If your opponent has no Benched Pokémon, ignore this effect.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane Punch",
		},
		text: {
			en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
