import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-36",

	localId: 36,

	name: {
		en: "Galarian Mr. Rime",
	},


	illustrator: "Naoki Saito",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Galarian Mr. Mime",
	},



	hp: 120,

	type: [
		Type.WATER,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Shuffle Dance",
	},

	text: {
		en: "Once during your turn, you may switch 1 of your opponent’s face-down Prize cards with the top card of their deck. (The cards stay face down.)",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Mad Party",
			},

			text: {
				en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			},

			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card