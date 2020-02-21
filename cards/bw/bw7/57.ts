import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-57",
	localId: 57,

	// Card informations
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 523,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/57/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/57/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/57/high",
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
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flame Charge",
			fr: "Nitrocharge",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
