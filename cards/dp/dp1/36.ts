import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-36",
	localId: 36,

	// Card informations
	name: {
		en: "Purugly",
		fr: "Chaffreux",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 432,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/36/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/36/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/36/high",
		},
	},

	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "High Hat",
			fr: "Chapeau haut",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking and discard it.",
			fr: "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
			fr: "Plaquage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
