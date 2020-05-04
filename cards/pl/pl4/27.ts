import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-27",

	localId: 27,

	name: {
		en: "Raichu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/27/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/27/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Pikachu",
	},

	dexId: 26,



	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Boosted Voltage",
			},

			text: {
				en: "If Raichu has a Pokémon Tool card attached to it, this attack does 20 damage to each of your opponent's Benched Pokémon that isn't an Evolved Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

			damage: 20,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Thunder Blast",
			},

			text: {
				en: "Discard a Lightning Energy card attached to Raichu.",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "+20",

		},
	],

	resistances: [
		{
			type: Type.METAL, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card