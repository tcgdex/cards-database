import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-48",
	localId: 48,

	// Card informations
	name: {
		en: "Kabuto",
	},

	hp: 30,

	type: [
		Type.FIGHTING,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 313,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Kabuto Armor",
		},
		text: {
			en: "Whenever an attack (even your own) does damage to Kabuto (after applying Weakness and Resistance), that attack only does half the damage to Kabuto (rounded down to nearest 10). (Any other effects of attacks still happen.) This power stops working while Kabuto is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
