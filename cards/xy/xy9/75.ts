import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-75",
	localId: 75,

	// Card informations
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 675,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/75/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/75/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/75/high",
		},
	},

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Parting Shot",
			fr: "Dernier Mot",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 60 (before applying Weakness and Resistance).",
			fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc. Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 60 (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Buster Swing",
			fr: "Repoussoir",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
