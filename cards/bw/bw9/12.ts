import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-12",
	localId: 12,

	// Card informations
	name: {
		en: "Flareon",
		fr: "Pyroli",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/12/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/12/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/12/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vengeance",
			fr: "Rétorsion",
		},
		text: {
			en: "Does 10 more damage for each Pokémon in your discard pile.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

