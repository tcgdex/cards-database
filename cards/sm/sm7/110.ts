import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-110",
	localId: 110,

	// Card informations
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 206,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Strike and Run",
			fr: "Frappe et Cours",
		},
		text: {
			en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck. If you put any Pokémon onto your Bench in this way, you may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Cherchez jusqu’à 3 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck. Si vous avez placé un Pokémon sur votre Banc de cette façon, vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sudden Flash",
			fr: "Flash Surprise",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
