import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-91",
	localId: 91,

	// Card informations
	name: {
		en: "Dragonite ex δ",
	},

	hp: 150,

	type: [
		Type.GRASS,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/91/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Deafen",
		},
		text: {
			en: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Roar",
		},
		text: {
			en: "Put 8 damage counters on the Defending Pokémon. If that Pokémon would be Knocked Out by this attack, you may put any damage counters not necessary to Knocked Out the Defending Pokémon on your opponent's Benched Pokémon in any way you like.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
