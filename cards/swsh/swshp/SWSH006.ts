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
		fr: "Gorythmic",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		type: AbilityType.TALENT,
		name: {
			fr: "Rythme Voltaique",
		},
		text: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie Plante, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			fr: "Enfoncement",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set,
}

export default card
