import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM217",
	localId: "SM217",

	// Card informations
	name: {
		en: "Trevenant & Dusknoir-GX",
	},

	hp: 270,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM217/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM217/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Night Watch",
		},
		text: {
			en: "Choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
		},
		damage: 150
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Pale Moon GX",
		},
		text: {
			en: "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out. If this Pokémon has at least 1 extra {P} Energy attached to it (in addition to this attack's cost), discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

