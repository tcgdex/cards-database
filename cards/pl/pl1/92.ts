import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-92",
	localId: 92,

	// Card informations
	name: {
		en: "Shuppet",
		fr: "Polychombr",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 353,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/92/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/92/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		name: {
			en: "Hypnotic Gaze",
			fr: "Regard hypnotique",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Fade Out",
			fr: "Faiblir",
		},
		text: {
			en: "Return Shuppet and all cards attached to it to your hand. (If you don't have any Benched Pokémon, this attack does nothing.)",
			fr: "Reprenez dans votre main Polychombr ainsi que toutes les cartes qui lui sont attachées. (Si vous ne possédez pas de Pokémon de Banc, cette attaque est sans effet.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
