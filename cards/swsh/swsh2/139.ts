import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
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

	attacks: [
		{
			name: {
				en: "Energy Stream"
			},
			text: {
				en: "Attach a Metal Energy card from your discard pile to this Pokémon."
			},
			damage: 30,
			cost: [
				Type.METAL,
				Type.COLORLESS
			]
		},
		{
			name: {
				en: "Smashing Edge"
			},
			text: {
				en: "Flip a coin. If tails, discard 2 Energy from this Pokémon."
			},
			damage: 120,
			cost: [

				Type.METAL,
				Type.METAL,
				Type.COLORLESS
			]
		}
	],

	weaknesses: [
		{
			type: Type.FIRE,
			value: "x2"
		}
	],

	resistances: [
		{
			type: Type.GRASS,
			value: "-30"
		},
	],

	type: [
		Type.METAL
	],

	retreat: 2,

	illustrator: "Hideki Ishikawa",

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: swsh2
}

export default card
