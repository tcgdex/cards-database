import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-46",
	localId: 46,

	// Card informations
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 741,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/46/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/46/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Feather Dance",
			fr: "Danse-Plume",
		},
		text: {
			en: "During your next turn, this Pokémon's Pom-Pom Punch attack's base damage is 100.",
			fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Poing Pom-Pom de ce Pokémon sont de 100.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Pom-Pom Punch",
			fr: "Poing Pom-Pom",
		},
		damage: 20
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
