import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM188",
	localId: "SM188",

	// Card informations
	name: {
		fr: "Kangourex-GX",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM188/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM188/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "aky CG Works",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Coup d’Poing en Demi Spirale",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Frappe Enragée",
		},
		text: {
			fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: "80+"
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Combine Familiale-GX",
		},
		text: {
			fr: "Piochez 5 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Promos",
		code: "smp"
	}
}

export default card
