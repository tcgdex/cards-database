import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-61",
	localId: 61,

	// Card informations
	name: {
		en: "Seviper",
		fr: "Seviper",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 336,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/61/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/61/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		name: {
			en: "Shed Skin",
			fr: "Mue",
		},
		text: {
			en: "Remove 4 damage counters from Seviper.",
			fr: "Retirez à Seviper 4 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Bite and Escape",
			fr: "Mordre avant de s'échapper",
		},
		text: {
			en: "You may switch Seviper with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Seviper avec 1 des Pokémon de votre Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Paralyze Poison",
			fr: "Poison paralysant",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
