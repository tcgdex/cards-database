import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-2",
	localId: 2,

	// Card informations
	name: {
		en: "Blastoise",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/2/high",
		},
	},

	evolveFrom: {
		en: "Wartortle",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 1035,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Rain Dance",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may attach 1 Water Energy Card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Hydro Pump",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: "40+"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
