import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-7",
	localId: 7,

	// Card informations
	name: {
		en: "Giovanni's Nidoking",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/7/high",
		},
	},

	evolveFrom: {
		en: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Intimidate",
		},
		text: {
			en: "If the Defending Pokémon's maximum HP is 50 or less, it can't attack Giovanni's Nidoking during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tumbling Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage; if tails, this attack does 40 damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
