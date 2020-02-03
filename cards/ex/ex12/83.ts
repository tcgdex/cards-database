import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-83",
	localId: 83,

	// Card informations
	name: {
		en: "Arcanine ex",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/83/high.png",
		},
	},

	evolveFrom: {
		en: "Growlithe",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},

	abilities: [{
		id: 258,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fire Remedy",
		},
		text: {
			en: "Whenever you attach a Fire Energy from your hand to Arcanine ex, remove 1 damage counter and all Special Conditions from Arcanine ex.",
		}
	}],

	attacks: [{
		name: {
			en: "[Pokémon-ex rule]",
		},
		text: {
			en: "When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Overrun",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card

