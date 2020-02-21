import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-12",
	localId: 12,

	// Card informations
	name: {
		en: "Mewtwo δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
		Type.METAL,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 155,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Delta Switch",
		},
		text: {
			en: "Once during your turn, when you put Mewtwo from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to your other Pokémon (excluding Mewtwo) in any way you like.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.METAL
		],
		name: {
			en: "Energy Burst",
		},
		text: {
			en: "Does 10 damage times the total amount of Energy attached to Mewtwo and the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
