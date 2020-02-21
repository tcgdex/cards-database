import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-7",
	localId: 7,

	// Card informations
	name: {
		en: "Dark Houndoom",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/7/high",
		},
	},

	evolveFrom: {
		en: "Houndour",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Eerie Howl",
		},
		text: {
			en: "If your opponent's Bench isn't full, look at his or her hand. If your opponent has any Baby Pokémon or Basic Pokémon there, choose 1 of them and put it on his or her Bench. Then, switch it with the Defending Pokémon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Dark Fire",
		},
		text: {
			en: "If there are any Energy cards attached to Dark Houndoom, discard 1 of them and this attack does 30 damage plus 20 more damage (plus 10 more damage for the Energy you discarded). If there aren't any, this attack does 30 damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
