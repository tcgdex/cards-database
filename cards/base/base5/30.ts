import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-30",
	localId: 30,

	// Card informations
	name: {
		en: "Dark Vileplume",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/30/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1186,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Hay Fever",
		},
		text: {
			en: "No Trainer cards can be played. This power stops working while Dark Vileplume is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Petal Whirlwind",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads. If you get 2 or more heads, Dark Vileplume is now Confused (after dealing damage).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
