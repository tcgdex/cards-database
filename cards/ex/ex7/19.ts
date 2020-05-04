import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-19",
	localId: 19,

	// Card informations
	name: {
		en: "Dark Tyranitar",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/19/high",
		},
	},

	evolveFrom: {
		en: "Dark Pupitar",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Nakaoka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Grind",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to Dark Tyranitar.",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Tail",
		},
		text: {
			en: "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite Off",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 70 damage plus 50 more damage.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
