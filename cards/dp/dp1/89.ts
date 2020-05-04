import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-89",
	localId: 89,

	// Card informations
	name: {
		en: "Meditite",
		fr: "Meditikka",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 307,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/89/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/89/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Detect",
			fr: "Détection",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Meditite during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Meditikka lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Meditate",
			fr: "Yoga",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
			fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
