import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM53",
	localId: "SM53",

	// Card informations
	name: {
		en: "Dhelmise",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 781,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1337,
		type: AbilityType.TALENT,
		name: {
			en: "Steelworker",
		},
		text: {
			en: "Your Metal Pokémon's attacks do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Anchor Shot",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
