import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Roggenrola",
		fr: "Nodulithe",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 524,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/69/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/69/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Smack Down",
			fr: "Anti-Air",
		},
		text: {
			en: "If your opponent's Active Pokémon has Fighting Resistance, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a une Résistance à Fighting, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
