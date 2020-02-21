import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-43",
	localId: 43,

	// Card informations
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 523,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/43/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/43/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/43/high",
		},
	},

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rear Kick",
			fr: "Ruade",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Electrispark",
			fr: "Arc Électrique",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
