import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-112",
	localId: 112,

	// Card informations
	name: {
		en: "Bewear",
		fr: "Chelours",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 760,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/112/high",
		},
	},

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bear Hug",
			fr: "Câlin d’Ours",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Superpower",
			fr: "Surpuissance",
		},
		text: {
			en: "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
			fr: "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
