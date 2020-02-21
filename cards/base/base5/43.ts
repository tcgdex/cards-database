import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-43",
	localId: 43,

	// Card informations
	name: {
		en: "Dark Primeape",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/43/high",
		},
	},

	evolveFrom: {
		en: "Mankey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 963,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Frenzy",
		},
		text: {
			en: "If Dark Primeape does any damage while it's Confused (even to itself), it does 30 more damage.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Frenzied Attack",
		},
		text: {
			en: "Dark Primeape is now Confused (after doing damage).",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
