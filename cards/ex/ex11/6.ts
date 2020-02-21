import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-6",
	localId: 6,

	// Card informations
	name: {
		en: "Gardevoir δ",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
		Type.METAL,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/6/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 825,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Jump",
		},
		text: {
			en: "Once during your turn (before your attack), you may move an Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Rage",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Gardevoir to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Black Magic",
		},
		text: {
			en: "Does 10 damage plus 20 more damage times the number of your opponent's Benched Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
