import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-68",
	localId: 68,

	// Card informations
	name: {
		en: "Koffing",
		fr: "Smogo Niv. 22",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/68/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/68/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Offensive Gas",
			fr: "Gaz offensif",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Gas Bomb",
			fr: "Bombe à gaz",
		},
		text: {
			en: "Koffing does 30 damage to itself, and don't apply Weakness and Resistance to this damage.",
			fr: "Smogo s'inflige 30 dégâts. N'appliquez pas la Faiblesse et la Résistance à ces dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
