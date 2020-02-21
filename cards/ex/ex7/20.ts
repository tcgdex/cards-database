import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-20",
	localId: 20,

	// Card informations
	name: {
		en: "Dark Tyranitar",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/20/high",
		},
	},

	evolveFrom: {
		en: "Dark Pupitar",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 81,
		name: "Kyoko Koizumi"
	},

	abilities: [{
		id: 275,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sand Damage",
		},
		text: {
			en: "As long as Dark Tyranitar is your Active Pokémon, put 1 damage counter on each of your opponent's Benched Basic Pokémon between turns. You can't use more than 1 Sand Damage Poké-Body between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Second Strike",
		},
		text: {
			en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
