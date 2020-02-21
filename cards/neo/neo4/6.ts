import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-6",
	localId: 6,

	// Card informations
	name: {
		en: "Dark Gengar",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/6/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 245,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Deep Sleep",
		},
		text: {
			en: "As long as any Dark Gengar are in play, a player flips 2 coins for each of his or her Pokémon that is Asleep at the end of each turn. If either of them is tails, that Pokémon is still Asleep. This power stops working if Dark Gengar is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Pull In",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, you may choose 1 of them and switch it with the Defending Pokémon (before doing damage or other effects of this attack). Either way, the Defending Pokémon is now Asleep.",
		},
		damage: 30
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
