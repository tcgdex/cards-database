import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-77",
	localId: 77,

	// Card informations
	name: {
		en: "Clefairy",
		fr: "Melofée",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 35,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/77/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/77/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sing",
			fr: "Berceuse",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moon Impact",
			fr: "Impact lunaire",
		},
		text: {
			en: "If Clefairy is evolved from Cleffa, this attack does 20 damage plus 20 more damage.",
			fr: "Si Melofée évolue de Melo, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
