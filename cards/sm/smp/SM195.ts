import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM195",
	localId: "SM195",

	// Card informations
	name: {
		en: "Charizard-GX",
	},

	hp: 250,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM195/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM195/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 198,
		name: "Framestore"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Raging Destruction",
		},
		text: {
			en: "Discard the top 8 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steam Artillery",
		},
		damage: 200
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dreadful Flames-GX",
		},
		text: {
			en: "Discard an Energy from each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 250
	}],

	weaknesses: [{
		type: Type.WATER,
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
