import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-45",
	localId: 45,

	// Card informations
	name: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/45/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/45/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Lure Poison",
			fr: "Appât Vénéneux",
		},
		text: {
			en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. The new Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Toss",
			fr: "Giclée Vaseuse",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
