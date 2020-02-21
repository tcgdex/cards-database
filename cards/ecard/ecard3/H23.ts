import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H23",
	localId: "H23",

	// Card informations
	name: {
		en: "Politoed",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 186,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H23/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sudden Growth",
		},
		text: {
			en: "Attach any number of basic Energy cards from your hand to Politoed.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frog Hop",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Splash",
		},
		text: {
			en: "Move 2 Energy cards attached to Politoed to 1 or 2 of your Benched Pokémon. (You may put both on the same Pokémon, or 1 each on 2 different Pokémon.) If you have no Benched Pokémon, ignore this effect.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
