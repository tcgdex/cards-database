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
		en: "Inteleon VMAX",
	},

	evolveFrom: {
		en: "Inteleon V"
	},

	tags: [
		Tag.VMAX,
	],

	attacks: [
		{
			name: {
				en: "Hydro Snipe "
			},
			text: {
				en: "You may put an Energy attached to your opponent's Active Pokémon into their hand. "
			},
			damage: 60,
			cost: [
				Type.WATER
			]
		},
		{
			name: {
				en: "Max Bullet"
			},
			text: {
				en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 160,
			cost: [

				Type.WATER,
				Type.WATER,
				Type.COLORLESS,

			]
		}
	],

	weaknesses: [
		{
			type: Type.LIGHTNING,
			value: "x2"
		}
	],

	type: [
		Type.WATER
	],

	retreat: 2,

	illustrator: "5ban Graphics",

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: swsh2
}

export default card
