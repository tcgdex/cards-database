import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-18",
	localId: 18,

	// Card informations
	name: {
		en: "Camerupt",
		fr: "Camerupt",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 323,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/18/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/18/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/18/high",
		},
	},

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moving Fire",
			fr: "Feu bougeant",
		},
		text: {
			en: "You may move a Fire Energy card attached to 1 of your Benched Pokémon to Camerupt.",
			fr: "Vous pouvez déplacer une carte Énergie Fire attachée à 1 de vos Pokémon de Banc sur Camerupt.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Volcanic Crash",
			fr: "Écrasement volcanique",
		},
		text: {
			en: "Flip 3 coins. For each tails, discard the top card of your deck. Ignore this effect if your opponent has any Water Pokémon in play.",
			fr: "Lancez 3 pièces. Pour chaque pile, défaussez la carte du dessus de votre deck. Ignorez cet effet si votre adversaire possède des Pokémon Water en jeu.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
