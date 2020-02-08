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
		fr: "Berserkatt de Galar",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		type: AbilityType.TALENT,
		name: {
			fr: "Boost Acier"
		},
		text: {
			fr: "Les attaques de vos Pokémon Acier infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la résistance)."
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			fr: "Griffe Acier",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set,
}

export default card
