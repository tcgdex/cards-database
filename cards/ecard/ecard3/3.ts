import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-3",
	localId: 3,

	// Card informations
	name: {
		en: "Arcanine",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/3/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 940,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Recharge",
		},
		text: {
			en: "When you play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic energy card from your discard pile and attach it to Arcanine.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shake",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "White Flames",
		},
		text: {
			en: "Discard all Energy cards attached to Arcanine.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "��2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
