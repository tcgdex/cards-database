import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-45",
	localId: 45,

	// Card informations
	name: {
		en: "Light Dewgong",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 87,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/45/high",
		},
	},

	evolveFrom: {
		en: "Seel",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masako Yamashita",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Freezing Breath",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Ice Pillar",
		},
		text: {
			en: "Until the end of your opponent's next turn, as long as Light Dewgong is your Active Pokémon, prevent all damage done by attacks to your Benched Pokémon. (Any other effects of attacks still happen.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
