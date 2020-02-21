import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-100",
	localId: 100,

	// Card informations
	name: {
		en: "Mew ex",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 357,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Psychic Vision",
		},
		text: {
			en: "Once during your turn (before your attack), if Mew ex is on your Bench, you may look at your opponent's hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy Bolt",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Devo Crush",
		},
		text: {
			en: "You may discard 2 Energy attached to Mew ex. If you do, you may remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
