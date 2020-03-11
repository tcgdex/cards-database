import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-45",
	localId: 45,

	// Card informations
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 678,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/45/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/45/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/45/high",
		},
	},

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "0313",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Teleportation Burst",
			fr: "Téléportation Explosive",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 30 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
