import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-41",
	localId: 41,

	// Card informations
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 561,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/41/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/41/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Reflect",
			fr: "Protection",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 40 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Telekinesis",
			fr: "Lévikinésie",
		},
		text: {
			en: "Does 50 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Inflige 50 dégâts à 1 des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
