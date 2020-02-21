import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV21",
	localId: "SV21",

	// Card informations
	name: {
		en: "Riolu",
		fr: "Riolu",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 447,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Detect",
			fr: "Détection",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Jab",
			fr: "Taquet",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
