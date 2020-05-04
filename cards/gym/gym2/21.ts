import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-21",
	localId: 21,

	// Card informations
	name: {
		en: "Blaine's Ninetales",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/21/high",
		},
	},

	evolveFrom: {
		en: "Vulpix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 718,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Healing Fire",
		},
		text: {
			en: "Whenever you attach a Fire Energy card from your hand to Blaine's Ninetales, remove 1 damage counter from it, if it has any. This power stops working while Blaine's Ninetales is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Burn Up",
		},
		text: {
			en: "Flip a coin. If tails, discard all Energy cards attached to Blaine's Ninetales.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
