import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-27",
	localId: 27,

	// Card informations
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 467,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/27/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/27/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/27/high",
		},
	},

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Top Burner",
			fr: "Super pyro",
		},
		text: {
			en: "For each Fire Energy attached to Magmortar, discard the top card from your opponent's deck. Then, flip a coin. If tails, discard all Fire Energy attached to Magmortar.",
			fr: "Pour chaque carte Énergie Fire attachée à Maganon, défaussez la carte du dessus du deck de votre adversaire. Lancez ensuite une pièce. Si c'est pile, défaussez toutes les cartes Énergie Fire attachées à Maganon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Burst Punch",
			fr: "Poing d'enfer",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
