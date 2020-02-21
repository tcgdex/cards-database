import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-39",
	localId: 39,

	// Card informations
	name: {
		en: "Whirlipede",
		fr: "Scobolide",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 544,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/39/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/39/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/39/high",
		},
	},

	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
		},
		text: {
			en: "If the Defending Pokémon is Poisoned, this attack does 60 more damage.",
			fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steamroller",
			fr: "Bulldoboule",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
