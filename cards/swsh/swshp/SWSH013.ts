import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swshp'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `swshp-${localId}`,
	localId: localId,

	// Card informations
	name: {
		fr: "Ponyta de Galar",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Vibra Soin",
		},
		text: {
			fr: "Soignez 30 dégâts de l'un de vos Pokémon."
		}
	}, {
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			fr: "Flop"
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set,
}

export default card
