import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-91",
	localId: 91,

	// Card informations
	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 200,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/91/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/91/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Astonish",
			fr: "Etonnement",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
			fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez la carte et demandez à votre adversaire de la mélanger à son deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde folie",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
