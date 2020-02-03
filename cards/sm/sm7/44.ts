import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-44",
	localId: 44,

	// Card informations
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 370,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/44/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/44/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/44/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 115,
		name: "Asako Ito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Even Game",
			fr: "Partie Équilibrée",
		},
		text: {
			en: "Search your deck for a number of Basic Pokémon up to the number of your opponent's Benched Pokémon and put those Pokémon onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un nombre de Pokémon de base inférieur ou égal au nombre de Pokémon de Banc de votre adversaire, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

