import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-2",
	localId: 2,

	// Card informations
	name: {
		en: "Blastoise δ",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
		Type.METAL,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/2/high",
		},
	},

	evolveFrom: {
		en: "Wartortle",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 729,
		type: AbilityType.POKEBODY,
		name: {
			en: "Shield Veil",
		},
		text: {
			en: "Each of your Active Pokémon has no Weakness.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Enraged Linear Attack",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Blastoise to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Skull Bash",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
