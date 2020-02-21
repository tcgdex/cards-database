import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-20",
	localId: 20,

	// Card informations
	name: {
		en: "Magneton",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/20/high",
		},
	},

	evolveFrom: {
		en: "Magnemite",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bounce Off",
		},
		text: {
			en: "If Magneton and the Defending Pokémon don't have the same number of Energy cards attached to them, the player controlling the Active Pokémon with the fewest number of Energy cards attached to it switches 1 of his or her Benched Pokémon with his or her Active Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Wave",
		},
		text: {
			en: "This attack does 30 damage plus 10 more damage times the number of your Benched Pokémon minus the number of your opponent's Benched Pokémon. (For example, if your opponent has 1 Benched Pokémon and you have 3, this attack will do 30 damage plus 20 more damage.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
