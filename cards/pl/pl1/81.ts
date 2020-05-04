import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-81",
	localId: 81,

	// Card informations
	name: {
		en: "Lotad",
		fr: "Nénupiot",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 270,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/81/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/81/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Ball",
			fr: "Eco-Sphère",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to Lotad but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Nénupiot qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Synthesis",
			fr: "Synthèse",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie Grass et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
