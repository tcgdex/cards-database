import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-99",
	localId: 99,

	// Card informations
	name: {
		en: "Dialga-EX",
		fr: "Dialga ex",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/99/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/99/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Reverse Edge",
			fr: "Revers-Lame",
		},
		text: {
			en: "Flip a coin. If heads, put a card from your discard pile into your hand.",
			fr: "Lancez une pièce. Si c'est face, ajoutez une carte de votre pile de défausse à votre main.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fast Forward",
			fr: "Avance Rapide",
		},
		text: {
			en: "For each Plasma Energy attached to this Pokémon, discard the top card of your opponent's deck.",
			fr: "Pour chaque Énergie Plasma attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
