import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-124",
	localId: 124,

	// Card informations
	name: {
		en: "Toxicroak",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/124/high.png",
		},
	},

	evolveFrom: {
		en: "Croagunk",
	},

	tags: [
		Tag.STAGE1,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "More Poison",
		},
		text: {
			en: "Put 2 more damage counters on your opponent’s Poisoned Pokémon during Pokémon Checkup.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Claws",
		},
		text: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Poisoned.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

