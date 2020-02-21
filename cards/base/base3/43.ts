import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-43",
	localId: 43,

	// Card informations
	name: {
		en: "Slowbro",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/43/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 417,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Strange Behavior",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to Slowbro as long as you don't Knock Out Slowbro. This power can't be used if Slowbro is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psyshock",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card
