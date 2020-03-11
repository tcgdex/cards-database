import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-10",
	localId: 10,

	// Card informations
	name: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 546,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/10/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/10/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Cotton Guard",
			fr: "Cotogarde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
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
