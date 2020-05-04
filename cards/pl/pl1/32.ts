import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 402,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/32/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/32/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/32/high",
		},
	},

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Revenge Melody",
			fr: "Mélodie vengeresse",
		},
		text: {
			en: "Does 20 damage times the number of Kricketot and Kricketune in your discard pile.",
			fr: "Inflige 20 dégâts multipliés par le nombre de Crikzik et Mélokrik dans votre pile de défausse.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Bug Buzz",
			fr: "Bourdon",
		},
		text: {
			en: "If the Defending Pokémon is Asleep, this attack does 50 damage plus 30 more damage. Remove the Special Condition Asleep from the Defending Pokémon.",
			fr: "Si le Pokémon Défenseur est Endormi, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires. Retirez-lui l'État Spécial Endormi.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
