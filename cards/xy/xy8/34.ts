import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-34",
	localId: 34,

	// Card informations
	name: {
		en: "Glalie-EX",
		fr: "Oniglali-EX",
	},

	hp: 170,

	type: [
		Type.WATER,
	],

	dexId: 362,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ice Breath",
			fr: "Haleine de Glace",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Instant Freeze",
			fr: "Gel Instantané",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 100 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
