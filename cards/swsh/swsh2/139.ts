import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'
import path from 'path'
import swsh2 from '../../../sets/swsh/swsh2'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `swsh2-${localId}`,
	localId: isNaN(parseInt(localId)) ? localId : parseInt(localId),

	dexId: 888,

	// Card informations
	name: {
		en: "Zacian",
		fr: "Zacian",
	},

	tags: [
		Tag.BASIC,
	],

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: swsh2
}

export default card
