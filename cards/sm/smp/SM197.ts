import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM197",
	localId: "SM197",

	// Card informations
	name: {
		en: "Greninja-GX",
	},

	hp: 230,

	type: [
		Type.WATER,
	],

	dexId: 658,


	evolveFrom: {
		en: "Frogadier",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "MPC Film",

	abilities: [{
		id: 1364,
		type: AbilityType.TALENT,
		name: {
			en: "Elusive Master",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is the last card in your hand, you may play it onto your Bench. If you do, draw 3 cards.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mist Slash",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
		},
		damage: 130
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Dark Mist-GX",
		},
		text: {
			en: "Put 1 of your opponent's Benched Pokémon and all cards attached to it into your opponent's hand. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
