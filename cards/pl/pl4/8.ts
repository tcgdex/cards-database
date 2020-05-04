import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-8",

	localId: 8,

	name: {
		en: "Salamence",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/8/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/8/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Shelgon",
	},

	dexId: 373,



	type: [
		Type.COLORLESS,
	],

	abilities: [
		{
	type: AbilityType.POKEPOWER, 

	name: {
		en: "Top Accelerator",
	},

	text: {
		en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If that card isn't a basic Energy card, discard it. This power can't be used if Salamence is affected by a Special Condition.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIRE,
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Shoot Through",
			},

			text: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

			damage: 50,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Dragon Claw",
			},


			damage: 70,

		},
	],

	weaknesses: [
		{
			type: Type.COLORLESS, 

			value: "+30",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-20",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card