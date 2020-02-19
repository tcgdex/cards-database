import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-29",
	localId: 29,

	// Card informations
	name: {
		en: "Tangrowth",
		fr: "Tangrowth",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 465,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/29/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/29/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/29/high.png",
		},
	},

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 575,
		type: AbilityType.POKEBODY,
		name: {
			en: "Green Renewal",
			fr: "Renouvellement vert",
		},
		text: {
			en: "Remove 1 damage counter from Tangrowth between turns.",
			fr: "Retirez à Bouldeneu 1 marqueur de dégât entre deux tours.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Green Acid",
			fr: "Acide vert",
		},
		text: {
			en: "Flip 2 coins. If the first coin is heads, the Defending Pokémon is now Confused. If the second coin is heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez 2 pièces. Si la première pièce est face, le Pokémon Défenseur est maintenant Confus. Si la deuxième pièce est face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reaching Vine",
			fr: "Liane d'accès",
		},
		text: {
			en: "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

