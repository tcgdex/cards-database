import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-72",
	localId: 72,

	// Card informations
	name: {
		en: "Sawk",
		fr: "Karaclée",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 539,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/72/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/72/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Quick Guard",
			fr: "Prévention",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn. This Pokémon can't use Quick Guard during your next turn.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base pendant le prochain tour de votre adversaire. Ce Pokémon ne peut pas utiliser Prévention pendant votre prochain tour.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Brick Break",
			fr: "Casse-Brique",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance or any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
