import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-7",
	localId: 7,

	// Card informations
	name: {
		en: "Jolteon δ",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
		Type.METAL,
	],

	dexId: 135,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/7/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Delta Search",
		},
		text: {
			en: "Search your deck for a Holon Energy card and attach it to Jolteon. Shuffle your deck afterward.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Return Spark",
		},
		text: {
			en: "You may return an Energy card attached to Jolteon to your hand. If you do, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
