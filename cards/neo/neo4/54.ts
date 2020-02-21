import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-54",
	localId: 54,

	// Card informations
	name: {
		en: "Light Wigglytuff",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/54/high",
		},
	},

	evolveFrom: {
		en: "Jigglypuff",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Evolution Song",
		},
		text: {
			en: "Your opponent may choose 1 of his or her Pokémon and search his or her deck for a card that evolves from that Pokémon. Your opponent attaches that card to that Pokémon. This counts as evolving that Pokémon. Either way, you may do the same, and then each player who searched shuffles his or her deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
