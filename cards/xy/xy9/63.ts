import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-63",
	localId: 63,

	// Card informations
	name: {
		en: "Skrelp",
		fr: "Venalgue",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 690,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/63/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/63/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hide",
			fr: "Cachette",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
