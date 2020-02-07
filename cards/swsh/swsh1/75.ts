import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-75",
	localId: 75,

	// Card informations
	name: {
		en: "Boltund",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/75/high.png",
		},
	},

	evolveFrom: {
		en: "Yamper",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Bite",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fighting Fangs",
		},
		text: {
			en: "If your opponent’s Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 90 more damage.",
		},
		damage: "90+"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

