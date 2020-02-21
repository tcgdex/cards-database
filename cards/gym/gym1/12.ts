import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Rocket's Moltres",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Wall",
		},
		text: {
			en: "If an attack does damage to Rocket's Moltres during your opponent's next turn (even if Rocket's Moltres is Knocked Out), Rocket's Moltres attacks your opponent's Active Pokémon for 10 damage. (Apply Weakness and Resistance.)",
		},
		damage: 40
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
