import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-35",
	localId: 35,

	// Card informations
	name: {
		en: "Rhydon",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 112,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/35/high",
		},
	},

	evolveFrom: {
		en: "Rhyhorn",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Ram",
		},
		text: {
			en: "Rhydon does 20 damage to itself. If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon. Switch the Pokémon even if Rhydon is knocked out.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
