import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-116",
	localId: 116,

	// Card informations
	name: {
		en: "Mudkip",
		fr: "Gobou",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 258,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/116/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/116/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/116/high",
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



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Mud Sport",
			fr: "Lance-boue",
		},
		text: {
			en: "If Mudkip has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
			fr: "Si Gobou possède moins d'Énergie que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
