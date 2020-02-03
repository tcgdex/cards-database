import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-1",
	localId: 1,

	// Card informations
	name: {
		en: "Dark Ampharos",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/1/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/1/high.png",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 588,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Conductivity",
		},
		text: {
			en: "Whenever your opponent attaches an Energy card to a Pokémon from his or her hand, this Power does 10 damage to that Pokémon. (Don't apply Weakness and Resistance) This power stops working if you have more than 1 Dark Ampharos in play or while Dark Ampharos is Asleep, Confused or Paralysed.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shock Bolt",
		},
		text: {
			en: "Discard all Energy cards attached to this Pokémon in order to use this attack.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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

