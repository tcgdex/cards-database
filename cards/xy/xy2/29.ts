import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-29",
	localId: 29,

	// Card informations
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 419,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/29/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/29/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/29/high",
		},
	},

	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rescue",
			fr: "Rescousse",
		},
		text: {
			en: "Shuffle 3 Pokémon from your discard pile into your deck.",
			fr: "Mélangez 3 Pokémon de votre pile de défausse avec votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Screw Tail",
			fr: "Queue Cloutée",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
