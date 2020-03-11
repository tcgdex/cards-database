import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-30",
	localId: 30,

	// Card informations
	name: {
		en: "Lickilicky C",
		fr: "Coudlangue ",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 463,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/30/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/30/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Licking-Licking Heal",
			fr: "Coudlangue guérisseur",
		},
		text: {
			en: "Attach a basic Energy card from your hand to 1 of your Pokémon. Then, remove 2 damage counters from that Pokémon.",
			fr: "Attachez une carte Énergie de base de votre main à 1 de vos Pokémon. Ensuite, retirez à ce Pokémon 2 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Return",
			fr: "Retour",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
