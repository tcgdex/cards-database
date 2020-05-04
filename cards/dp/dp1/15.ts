import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Skuntank",
		fr: "Moufflair",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 435,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/15/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/15/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/15/high",
		},
	},

	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hiroaki Ito",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Frustration",
			fr: "Frustration",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon that doesn't have any damage counters on it. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire ne possédant pas de marqueurs de dégât. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Cloud",
			fr: "Nuage Toxik",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
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
