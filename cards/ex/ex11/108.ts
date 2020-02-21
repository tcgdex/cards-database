import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-108",
	localId: 108,

	// Card informations
	name: {
		en: "Flareon ex",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/108/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 884,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolutionary Flame",
		},
		text: {
			en: "Once during your turn, when you play Flareon ex from your hand to evolve 1 of your Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Burned and Confused.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flame Screen",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Flareon ex by attacks is reduced by 20 (after applying Weakness and Resistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Tackle",
		},
		text: {
			en: "Flareon ex does 10 damage to itself.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
