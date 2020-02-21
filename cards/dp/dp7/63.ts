import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-63",
	localId: 63,

	// Card informations
	name: {
		en: "Larvitar",
		fr: "Larvitar",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 246,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/63/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/63/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/63/high",
		},
	},

	evolveFrom: {
		fr: "Embrylex",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
			fr: "Éboulement",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+10"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
