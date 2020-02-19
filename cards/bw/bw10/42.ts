import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-42",
	localId: 42,

	// Card informations
	name: {
		en: "Solosis",
		fr: "Nucléos",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 577,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/42/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/42/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/42/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



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
			fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

