import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-94",
	localId: 94,

	// Card informations
	name: {
		en: "Jirachi ex",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 948,
		type: AbilityType.POKEBODY,
		name: {
			en: "Star Light",
		},
		text: {
			en: "As long as your opponent has any Pokémon-ex or Stage 2 Evolved Pokémon in play, Jirachi ex pays Colorless less Energy to use Shield Beam or Super Psy Bolt.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Shield Beam",
		},
		text: {
			en: "During your opponent's next turn, your opponent can't use any Poké-Powers on his or her Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy Bolt",
		},
		damage: 50
	}],







	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
