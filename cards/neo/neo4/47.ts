import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-47",
	localId: 47,

	// Card informations
	name: {
		en: "Light Golduck",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/47/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Flipper Stroke",
		},
		text: {
			en: "Your opponent looks at the top 3 cards of his or her deck. If any of them are basic Energy cards, he or she may show any number of them to you and put them into his or her hand. You do the same. Either way, each player shuffles his or her deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Core Blast",
		},
		text: {
			en: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
