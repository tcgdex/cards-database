import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-19",
	localId: 19,

	// Card informations
	name: {
		en: "Abomasnow",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 460,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/19/high",
		},
	},

	evolveFrom: {
		en: "Snover",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},

	abilities: [{
		id: 525,
		type: AbilityType.POKEBODY,
		name: {
			en: "Glacier Snow",
		},
		text: {
			en: "If Abomasnow is your Active Pokémon and is damaged by an opponent's attack (even if Abomasnow is Knocked Out), the Attacking Pokémon is now Asleep.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Blizzard",
		},
		text: {
			en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
