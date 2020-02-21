import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-2",
	localId: 2,

	// Card informations
	name: {
		en: "Lucario",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/2/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Blocking Punch",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Lucario by attacks is reduced by 20 (after applying Weakness and Resistance).",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Striking Kick",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects of the Defending Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card
