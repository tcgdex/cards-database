import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-31",
	localId: 31,

	// Card informations
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/31/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/31/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/31/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Brine",
			fr: "Saumure",
		},
		text: {
			en: "This attack does 90 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 90 dégâts à l’un des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tornado Shot",
			fr: "Tir Tornade",
		},
		text: {
			en: "Discard a Water Energy from this Pokémon. This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez une Énergie Water de ce Pokémon. Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
