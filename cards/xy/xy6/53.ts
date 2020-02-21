import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-53",
	localId: 53,

	// Card informations
	name: {
		en: "Altaria",
		fr: "Altaria",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/53/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/53/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/53/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Song of Echoes",
			fr: "Écho Mélodique",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of Benched Pokémon (both yours and your opponent's).",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
		},
	},{
		cost: [
			Type.WATER,
			Type.METAL
		],
		name: {
			en: "Midnight Eyes",
			fr: "Yeux de Minuit",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
