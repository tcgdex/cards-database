import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H15",
	localId: "H15",

	// Card informations
	name: {
		en: "Lanturn",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H15/high",
		},
	},

	evolveFrom: {
		en: "Chinchou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 198,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Ion Coating",
		},
		text: {
			en: "You may use this power once during each of your turn (before your attack). All Lightning Energy attached to your Active Pokémon becomes Water Energy for the rest of your turn. (This effect ends if your Active Pokémon retreats or is returned to your hand). This power can't be used if Lanturn is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electric Tackle",
		},
		text: {
			en: "This attack does 20 damage plus 10 more damage for each Energy attached to Lanturn. Flip a coin. If tails, Lanturn does 10 damage to itself for each Energy attached to it.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
