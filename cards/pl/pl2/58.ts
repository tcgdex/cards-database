import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-58",
	localId: 58,

	// Card informations
	name: {
		en: "Carvanha",
		fr: "Carvanha Niv. 13",
	},

	hp: 40,

	type: [
		Type.DARKNESS,
	],

	dexId: 318,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/58/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/58/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scary Face",
			fr: "Grimace",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Whirlpool",
			fr: "Siphon",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
