import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-23",
	localId: 23,

	// Card informations
	name: {
		en: "Omastar",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/23/high",
		},
	},

	evolveFrom: {
		en: "Omanyte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 558,
		type: AbilityType.POKEBODY,
		name: {
			en: "Primal Stare",
		},
		text: {
			en: "As long as Omastar is your Active Pokémon, your opponent can't play Basic Pokémon or Evolution cards from his or her hand to evolve his or her Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Spook",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
