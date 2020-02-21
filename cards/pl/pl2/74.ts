import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-74",
	localId: 74,

	// Card informations
	name: {
		en: "Nidorino",
		fr: "Nidorino Niv. 30",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 33,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/74/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/74/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/74/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Toxic",
			fr: "Toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frustration",
			fr: "Frustration",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon that doesn't have any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire qui ne possède pas de marqueurs de dégât. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
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
