import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-2",
	localId: 2,

	// Card informations
	name: {
		en: "Butterfree",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 12,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/2/high",
		},
	},

	evolveFrom: {
		en: "Metapod",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 117,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sooth Dust",
		},
		text: {
			en: "As long as Butterfree is your Active Pokémon, remove 1 damage counter from each of your Pokémon between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
