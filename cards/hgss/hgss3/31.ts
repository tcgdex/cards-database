import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-31",
	localId: 31,

	// Card informations
	name: {
		en: "Muk",
		fr: "Grotadmorv",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/31/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/31/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/31/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sludge Drag",
			fr: "Gliss'Crade",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Confused and Poisoned.",
			fr: "Échangez le Pokémon Défenseur avec un Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Confus et Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pester",
			fr: "Abattre",
		},
		text: {
			en: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 30 more damage.",
			fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
