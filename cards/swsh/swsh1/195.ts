import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-195",
	localId: 195,

	// Card informations
	name: {
		en: "Zacian V",
	},

	hp: 220,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/195/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/195/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Intrepid Sword",
		},
		text: {
			en: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Metal Energy cards you find there to this Pokémon. Put the other cards into your hand. If you use this Ability, your turn ends.",
		}
	}],

	attacks: [{
		name: {
			en: "V rule",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Brave Blade",
		},
		text: {
			en: "During your next turn, this Pokémon can't attack.",
		},
		damage: 230
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

