import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-61",
	localId: 61,

	// Card informations
	name: {
		en: "Sandslash",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/61/high",
		},
	},

	evolveFrom: {
		en: "Sandshrew",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spike Armor",
		},
		text: {
			en: "During your opponent's next turn, if Sandslash is damaged by an opponent's attack (even if Sandslash is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Poison Spike",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Poisoned.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
