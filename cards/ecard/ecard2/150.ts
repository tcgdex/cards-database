import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-150",
	localId: 150,

	// Card informations
	name: {
		en: "Nidoking",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/150/high",
		},
	},

	evolveFrom: {
		en: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 60,
		name: "Hironobu Yoshida"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Horn",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Rolling Thunder",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
