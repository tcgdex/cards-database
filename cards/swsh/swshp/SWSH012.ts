import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swshp'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `swshp-${localId}`,
	localId: localId,

	// Card informations
	name: {
		fr: "Morpeko",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			fr: "Éclair",
		},
		text: {
			fr: "Lancez une pièces. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set,
}

export default card
