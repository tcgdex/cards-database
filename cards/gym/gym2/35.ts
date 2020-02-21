import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-35",
	localId: 35,

	// Card informations
	name: {
		en: "Brock's Primeape",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/35/high",
		},
	},

	evolveFrom: {
		en: "Mankey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 672,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Scram",
		},
		text: {
			en: "If Brock's Primeape ever has exactly 10 HP left, shuffle it and all cards attached to it into your deck. This power stops working while Brock's Primeape is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Mega Thrash",
		},
		text: {
			en: "Brock's Primeape does 20 damage to itself. If there is a Stadium card in play, discard it.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
