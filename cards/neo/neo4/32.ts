import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-32",
	localId: 32,

	// Card informations
	name: {
		en: "Dark Croconaw",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 159,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/32/high",
		},
	},

	evolveFrom: {
		en: "Totodile",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Clamping Jaw",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing. (Benching either Pokémon ends this effect.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
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
