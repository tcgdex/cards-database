import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-31",
	localId: 31,

	// Card informations
	name: {
		en: "Blaine's Charmeleon",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/31/high",
		},
	},

	evolveFrom: {
		en: "Charmander",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Claws",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Bonfire",
		},
		text: {
			en: "Flip 3 coins. For each heads, discard 1 Energy card attached to Blaine's Charmeleon. If you can't discard Energy cards, this attack does nothing. This attack does 10 damage times the number of heads to each of your opponent's Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
