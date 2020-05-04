import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-38",
	localId: 38,

	// Card informations
	name: {
		en: "Parasect",
		fr: "Parasect",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 47,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/38/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/38/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/38/high",
		},
	},

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nutritional Support",
			fr: "Support nutritionnel",
		},
		text: {
			en: "Search your deck for up to 2 Grass Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass et attachez-les à n'importe lequel de vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Hibernation Spore",
			fr: "Spore d'hibernation",
		},
		text: {
			en: "The Defending Pokémon is now Asleep. Flip 2 coins instead of 1 between turns. If either of them is tails, the Defending Pokémon is still Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi. Lancez 2 pièces au lieu d'1 entre deux tours. Si l'une d'elles est pile, le Pokémon Défenseur reste Endormi.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
