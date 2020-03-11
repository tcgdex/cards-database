import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-105",
	localId: 105,

	// Card informations
	name: {
		en: "Delcatty",
		fr: "Delcatty",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/105/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/105/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/105/high",
		},
	},

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Salon",
			fr: "Distributeur d'Énergie",
		},
		text: {
			en: "Search your deck for up to 3 different types of basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck jusqu'à 3 différents types de cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fake Out",
			fr: "Bluff",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
