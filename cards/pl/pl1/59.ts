import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-59",
	localId: 59,

	// Card informations
	name: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 394,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/59/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/59/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/59/high",
		},
	},

	evolveFrom: {
		en: "Piplup",
		fr: "Tiplouf",
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
			Type.WATER
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Bubblebeam",
			fr: "Bulles d'O",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
