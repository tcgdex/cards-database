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
		fr: "Moumouton>",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hitoshi Ariga",

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Boul'Armure",
		},
		text: {
			fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adrversaire."
		}
	}, {
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Coup d'Boule",
		},
		damage: 20

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
