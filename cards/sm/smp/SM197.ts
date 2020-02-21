import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM197/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM197/high",
		},
	},

	evolveFrom: {
		en: "Frogadier",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 196,
		name: "MPC Film"
	},

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
