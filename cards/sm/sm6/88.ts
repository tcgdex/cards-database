import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-88",
	localId: 88,

	// Card informations
	name: {
		en: "Dedenne",
		fr: "Dedenne",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 702,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/88/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/88/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami",
		},
		text: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electrichain",
			fr: "Électrichaîne",
		},
		text: {
			en: "If you have any Lightning Pokémon on your Bench, this attack does 30 more damage.",
			fr: "Si vous avez un Pokémon Lightning sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
