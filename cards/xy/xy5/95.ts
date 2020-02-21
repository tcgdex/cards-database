import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-95",
	localId: 95,

	// Card informations
	name: {
		en: "Probopass",
		fr: "Tarinorme",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 476,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/95/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/95/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/95/high",
		},
	},

	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Triple Smash",
			fr: "Triple Éclate",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Reinforced Nose",
			fr: "Nez Renforcé",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 50 more damage.",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
