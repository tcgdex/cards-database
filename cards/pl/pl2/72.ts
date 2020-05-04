import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-72",
	localId: 72,

	// Card informations
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂ Niv. 9",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 32,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/72/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/72/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leer",
			fr: "Groz'yeux",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Horn Hazard",
			fr: "Chanc'korne",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
