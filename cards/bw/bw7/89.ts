import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-89",
	localId: 89,

	// Card informations
	name: {
		en: "Landorus-EX",
		fr: "Démétéros-EX",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 645,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/89/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/89/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Hammerhead",
			fr: "Massue",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Land's Judgment",
			fr: "Jugement Terrestre",
		},
		text: {
			en: "You may discard all Fighting Energy attached to this Pokémon. If you do, this attack does 70 more damage.",
			fr: "Vous pouvez défausser toutes les Énergies Fighting attachées à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
