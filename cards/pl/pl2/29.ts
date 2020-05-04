import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-29",
	localId: 29,

	// Card informations
	name: {
		en: "Nidoking",
		fr: "Nidoking Niv. 59",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/29/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/29/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/29/high",
		},
	},

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 391,
		type: AbilityType.POKEBODY,
		name: {
			en: "Territoriality",
			fr: "Territorialité",
		},
		text: {
			en: "If your Active Pokémon is damaged by an opponent's attack (even if that Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon. You can't put more than 2 damage counters in this way.",
			fr: "Si l'attaque de votre adversaire inflige des dégâts à votre Pokémon Actif (même si ce Pokémon est mis K.O), placez 2 marqueurs de dégât sur le Pokémon Attaquant. Vous ne pouvez pas placer plus de 2 marqueurs de dégât de cette façon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fling Away",
			fr: "Catapulte",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, this attack's base damage is 30 instead of 60 and this attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si votre adversaire possède des Pokémon de Banc, les dégâts de base de cette attaque sont de 30 au lieu de 60 et cette attaque inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Horn",
			fr: "Giga corne",
		},
		text: {
			en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si ce sont des piles, cette attaque est sans effet.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
