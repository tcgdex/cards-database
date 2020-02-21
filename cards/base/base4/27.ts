import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-27",
	localId: 27,

	// Card informations
	name: {
		en: "Mr. Mime",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/27/high",
		},
	},

	evolveFrom: {
		en: "Mime Jr.",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 175,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Invisible Wall",
		},
		text: {
			en: "Whenever an attack (including your own) does 30 or more damage to Mr. Mime (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.) This power can't be used if Mr. Mime is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Meditate",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
