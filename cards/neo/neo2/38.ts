import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-38",
	localId: 38,

	// Card informations
	name: {
		en: "Eevee",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 186,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Evolution",
		},
		text: {
			en: "Whenever you attach an Energy card to Eevee, flip a coin. If heads, search your deck for that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Shuffle your deck afterward. This power can't be used if Eevee is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smash Kick",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
