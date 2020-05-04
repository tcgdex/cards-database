import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-53",
	localId: 53,

	// Card informations
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 426,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/53/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/53/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/53/high",
		},
	},

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Expand",
			fr: "Pousstoidla",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Drifblim by attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Grodrive par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
