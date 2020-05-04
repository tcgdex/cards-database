import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-9",

	localId: 9,

	name: {
		en: "Swalot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Aya Kusube",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/9/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/9/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Gulpin",
	},

	dexId: 317,



	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Damage Roller",
			},

			text: {
				en: "Put damage counters on the Defending Pokémon until the Defending Pokémon has the same remaining HP as Swalot. (If the Defending Pokémon has the same or less remaining HP as Swalot, this attack does nothing.)",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Entangle Tackle",
			},

			text: {
				en: "You may do 50 damage plus 30 more damage. If you do, this attack does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
			},

			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "+20",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card