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

	dexId: 889,

	// Card informations
	name: {
		en: "Zamazenta",
		fr: "Zamazenta",
	},

	hp: 120,

	type: [
		Type.METAL
	],

	tags: [
		Tag.BASIC,
	],

	attacks: [
		{
			name: {
				en: "Guard Press",
			},
			text: {
				en: "During your opponent's next turn, this Pokémon takes 20 less famage from attacks (after applying Weakness and Resistance).",
			},
			cost: [
				Type.METAL,
				Type.COLORLESS
			],
			damage: 30
		},
		{
			name: {
				en: "Power Rush",
			},
			text: {
				en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack."
			},
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
		}
	],

	retreat: 2,

	illustrator: "Hideki Ishikawa",

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: swsh2
}

export default card
