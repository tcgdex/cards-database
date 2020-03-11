import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-2",
	localId: 2,

	// Card informations
	name: {
		en: "Altaria",
		fr: "Altaria",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/2/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/2/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/2/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Midnight Eyes",
			fr: "Yeux de minuit",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stadium Power",
			fr: "Stade puissant",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 40 damage plus 30 more damage.",
			fr: "Si une carte Stade est en jeu, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
