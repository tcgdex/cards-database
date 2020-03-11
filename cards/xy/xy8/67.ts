import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-67",
	localId: 67,

	// Card informations
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/67/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/67/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mirror Barrier",
			fr: "Bouclier Miroir",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
