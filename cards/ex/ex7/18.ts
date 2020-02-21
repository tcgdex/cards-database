import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-18",
	localId: 18,

	// Card informations
	name: {
		en: "Dark Sandslash",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
		Type.DARKNESS,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/18/high",
		},
	},

	evolveFrom: {
		en: "Sandshrew",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 585,
		type: AbilityType.POKEBODY,
		name: {
			en: "Poison Payback",
		},
		text: {
			en: "If Dark Sandslash is your Active Pokémon and is damaged by an opponent's attack (even if Dark Sandslash is Knocked Out), the Attacking Pokémon is now Poisoned.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swift",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
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
