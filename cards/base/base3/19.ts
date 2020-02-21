import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-19",
	localId: 19,

	// Card informations
	name: {
		en: "Dragonite",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/19/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 676,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Step In",
		},
		text: {
			en: "Once during your turn (before you attack) if Dragonite is on your Bench, you may switch it with your Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
		},
		damage: 40
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card
