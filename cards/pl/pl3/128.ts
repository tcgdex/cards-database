import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-128",
	localId: 128,

	// Card informations
	name: {
		en: "Skorupi",
		fr: "Rapion",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 451,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/128/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/128/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/128/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-venin",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Smash",
			fr: "Éclate-queue",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
