import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-68",
	localId: 68,

	// Card informations
	name: {
		en: "Vullaby",
		fr: "Vostourno",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 629,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/68/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/68/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Rear Guard",
			fr: "Garde Arrière",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
