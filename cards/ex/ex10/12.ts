import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-12",
	localId: 12,

	// Card informations
	name: {
		en: "Porygon2",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/12/high",
		},
	},

	evolveFrom: {
		en: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1365,
		type: AbilityType.POKEPOWER,
		name: {
			en: "3-D Reset",
		},
		text: {
			en: "As often as you like during your turn (before your attack), return a Pokémon Tool card attached to 1 of your Pokémon to your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Data Retrieval",
		},
		text: {
			en: "If you have less than 8 cards in your hand, draw cards until you have 8 cards in your hand.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scramble Trip",
		},
		text: {
			en: "If Porygon2 has a Scramble Energy card attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Confused.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
