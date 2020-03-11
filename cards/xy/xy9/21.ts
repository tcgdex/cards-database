import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-21",
	localId: 21,

	// Card informations
	name: {
		en: "Slowking",
		fr: "Roigada",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/21/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/21/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/21/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Aya Kusube",

	abilities: [{
		id: 1427,
		type: AbilityType.TALENT,
		name: {
			en: "Royal Flash",
			fr: "Flash Royal",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, move an Energy from your opponent's Active Pokémon to 1 of his or her Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, déplacez une Énergie attachée au Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Psych Up",
			fr: "Boost",
		},
		text: {
			en: "During your next turn, this Pokémon's Psych Up attack does 40 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Boost de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
