import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-27",
	localId: 27,

	// Card informations
	name: {
		en: "Raichu",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/27/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Boosted Voltage",
		},
		text: {
			en: "If Raichu has a Pokémon Tool card attached to it, this attack does 20 damage to each of your opponent's Benched Pokémon that isn't an Evolved Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Blast",
		},
		text: {
			en: "Discard a Lightning Energy card attached to Raichu.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
