import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-29",
	localId: 29,

	// Card informations
	name: {
		en: "Venomoth",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/29/high",
		},
	},

	evolveFrom: {
		en: "Venonat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 168,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Shift",
		},
		text: {
			en: "Once during your turn (before your attack), you may change the type of Venomoth to the type of any other Pokémon in play other than Colorless. This power can't be used if Venomoth is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Venom Powder",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
