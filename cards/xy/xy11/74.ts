import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-74",
	localId: 74,

	// Card informations
	name: {
		en: "Cobalion",
		fr: "Cobaltium",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 638,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/74/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/74/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.METAL
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
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Revenge Blast",
			fr: "Explo-Vengeance",
		},
		text: {
			en: "This attack does 30 more damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
