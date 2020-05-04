import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/14/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/14/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/14/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Acceleration Bolt",
			fr: "Éclair rapide",
		},
		text: {
			en: "Search your deck for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck jusqu’à deux cartes Énergie de base et attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
		},
		text: {
			en: "Flip a coin. If tails, Ampharos does 20 damage to itself.",
			fr: "Lancez une pièce. Si c’est pile, Pharamp s’inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
