import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-98",

	localId: 98,

	name: {
		en: "Salamence LV. X",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/98/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/98/high",
			},

	},


	// Card Pokémon Informations

	dexId: 373,



	type: [
		Type.COLORLESS,
	],

	abilities: [
		{
	type: AbilityType.POKEPOWER, 

	name: {
		en: "Double Fall",
	},

	text: {
		en: "Once during your turn (before your attack), when you put Salamence LV.X from your hand onto your Active Salamence, you may use this power. For each of your opponent's Pokémon that is Knocked Out by damage from Salamence's attacks this turn, take 1 more Prize card.",
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
				Type.COLORLESS,
			],

			name: {
				en: "Steam Blast",
			},

			text: {
				en: "Discard an Energy card attached to Salamence.",
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: Type.COLORLESS, 

			value: "×2",

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