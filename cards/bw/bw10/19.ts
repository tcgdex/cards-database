import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-19",
	localId: 19,

	// Card informations
	name: {
		en: "Octillery",
		fr: "Octillery",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 224,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/19/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/19/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/19/high",
		},
	},

	evolveFrom: {
		en: "Remoraid",
		fr: "Rémoraid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sharpshooting",
			fr: "Tir de Précision",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Bubble Beam",
			fr: "Bulles d'O",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
