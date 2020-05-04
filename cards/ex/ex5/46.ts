import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-46",
	localId: 46,

	// Card informations
	name: {
		en: "Rhydon",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 112,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/46/high",
		},
	},

	evolveFrom: {
		en: "Rhyhorn",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 1024,
		type: AbilityType.POKEBODY,
		name: {
			en: "Power Diffusion",
		},
		text: {
			en: "As long as Rhydon is your Active Pokémon, prevent all damage done by attacks to all of your Benched Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Horn Drill",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Tail",
		},
		text: {
			en: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
