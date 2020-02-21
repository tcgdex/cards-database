import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-43",
	localId: 43,

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
			en: "https://assets.tcgdex.net/en/ecard/ecard1/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/43/high",
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
		id: 343,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Tailwind",
		},
		text: {
			en: "Once during your turn (before you attack), if Dragonite is on your Bench, you may reduce your Active Pokémon's Retreat cost to 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.FIGHTING
		],
		name: {
			en: "Dragon Tail",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
		},
		damage: 40
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
