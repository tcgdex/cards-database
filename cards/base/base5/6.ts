import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-6",
	localId: 6,

	// Card informations
	name: {
		en: "Dark Dugtrio",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/6/high",
		},
	},

	evolveFrom: {
		en: "Diglett",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1121,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sinkhole",
		},
		text: {
			en: "Whenever your opponent's Active Pokémon retreats, your opponent flips a coin. If tails, this power does 20 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working while Dark Dugtrio is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Knock Down",
		},
		text: {
			en: "Your opponent flips a coin. If tails, this attack does 20 damage plus 20 more damage; if heads, this attack does 20 damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
