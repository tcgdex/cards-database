import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-50",
	localId: 50,

	// Card informations
	name: {
		en: "Grumpig",
		fr: "Groret",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 326,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/50/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/50/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/50/high",
		},
	},

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Tricky Steps",
			fr: "Pas Délicats",
		},
		text: {
			en: "You may move an Energy attached to your opponent's Active Pokémon to 1 of your opponent's Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie attachée au Pokémon Actif de votre adversaire vers l'un des Pokémon de Banc de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
