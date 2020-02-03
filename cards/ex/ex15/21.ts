import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-21",
	localId: 21,

	// Card informations
	name: {
		en: "Quagsire δ",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 195,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/21/high.png",
		},
	},

	evolveFrom: {
		en: "Wooper",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},

	abilities: [{
		id: 612,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dig up",
		},
		text: {
			en: "Once during your turn, when you play Quagsire from your hand to evolve 1 of your Pokémon, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and put them into your hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pump Out",
		},
		text: {
			en: "If Quagsire has a Pokémon Tool card attached to it, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card

