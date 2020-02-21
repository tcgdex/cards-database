import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-18",
	localId: 18,

	// Card informations
	name: {
		en: "Dark Magcargo",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/18/high",
		},
	},

	evolveFrom: {
		en: "Slugma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},

	abilities: [{
		id: 609,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Hot Plate",
		},
		text: {
			en: "As long as Dark Magcargo is your Active Pokémon, whenever a player puts a Baby Pokémon or Basic Pokémon onto his or her Bench from his or her hand, this power does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working if Dark Magcargo is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Ball of Flame",
		},
		text: {
			en: "You may discard a Energy card attached to Dark Magcargo when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
