import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-101",
	localId: 101,

	// Card informations
	name: {
		en: "Manectric ex",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/101/high",
		},
	},

	evolveFrom: {
		en: "Electrike",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Disconnect",
		},
		text: {
			en: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
		},
		damage: 40
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Mega Shot",
		},
		text: {
			en: "Discard all Lightning Energy attached to Manectric ex and then choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
