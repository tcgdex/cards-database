import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Slaking",
		fr: "Monaflemit",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 289,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/16/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/16/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/16/high",
		},
	},

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 533,
		type: AbilityType.POKEBODY,
		name: {
			en: "Lazy Paunch",
			fr: "Ventre paresseux",
		},
		text: {
			en: "If Slaking used any attacks during your last turn, Slaking can't attack.",
			fr: "Si Monaflemit a utilisé des attaques lors de votre tour précédent, il ne peut pas attaquer.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Best Dash",
			fr: "Meilleure ruée",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Slaking by attacks is increased by 50 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Monaflemit par des attaques sont augmentés de 50 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
