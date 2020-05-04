import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-36",
	localId: 36,

	// Card informations
	name: {
		en: "Toxicroak",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/36/high",
		},
	},

	evolveFrom: {
		en: "Croagunk",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Daisuke Ito",

	abilities: [{
		id: 40,
		type: AbilityType.POKEBODY,
		name: {
			en: "Poison Sacs",
		},
		text: {
			en: "Your opponent can't remove the Special Condition Poisoned by evolving or devolving his or her Poisoned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Poisoned Pokémon.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Knuckle Claws",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
