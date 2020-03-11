import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-93",
	localId: 93,

	// Card informations
	name: {
		en: "Comfey",
		fr: "Guérilande",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 764,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",

	abilities: [{
		id: 1211,
		type: AbilityType.TALENT,
		name: {
			en: "Flower Shield",
			fr: "Garde Florale",
		},
		text: {
			en: "Each of your Pokémon that has any Fairy Energy attached to it can't be affected by any Special Conditions. Remove any Special Conditions affecting those Pokémon.",
			fr: "Aucun de vos Pokémon auquel de l’Énergie Fairy est attachée ne peut être affecté par des États Spéciaux. Retirez tous les États Spéciaux affectant ces Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Sweet Kiss",
			fr: "Doux Baiser",
		},
		text: {
			en: "Your opponent draws a card.",
			fr: "Votre adversaire pioche une carte.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
