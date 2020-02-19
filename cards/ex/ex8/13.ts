import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-13",
	localId: 13,

	// Card informations
	name: {
		en: "Ninjask",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 291,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/13/high.png",
		},
	},

	evolveFrom: {
		en: "Nincada",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},

	abilities: [{
		id: 935,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fast Protection",
		},
		text: {
			en: "Prevent all effects, including damage, done to Ninjask by your opponent's attacks from his or her Basic Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swords Dance",
		},
		text: {
			en: "During your next turn, Ninjask's Slash attack's base damage is 80.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card

