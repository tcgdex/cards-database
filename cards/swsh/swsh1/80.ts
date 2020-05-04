import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swsh1'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `${set.code}-${localId}`,
	localId: 80,


	// Card informations
	name: {
		en: "Morpeko VMAX",
		fr: "Morpeko VMAX",
	},

	hp: 300,

	type: [
		Type.LIGHTNING,
	],

	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/80/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/80/low",
			},


	},

	evolveFrom: {
		en: "Morpeko V",
		fr: "Morpeko-V",
	},


	tags: [
		Tag.VMAX,
	],

	illustrator: "5ban Graphics",


	attacks: [
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Max Discharge",
				fr: "Déchargeomax",
			},

			text: {
				en: "This attack also does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

			damage: 180,

		},
	],


	weaknesses: [
		{
			type: Type.FIGHTING,

			value: "×2",

		},
	],


	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,


	set,
}

export default card
