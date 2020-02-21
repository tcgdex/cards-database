import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-95",
	localId: 95,

	// Card informations
	name: {
		en: "Metagross ex",
	},

	hp: 150,

	type: [
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/95/high",
		},
	},

	evolveFrom: {
		en: "Metang",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Reversal",
		},
		text: {
			en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. If you do, this attack does 40 damage to the new Defending Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extra Comet Punch",
		},
		text: {
			en: "During your next turn, Extra Comet Punch does 50 damage plus 50 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	},{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
