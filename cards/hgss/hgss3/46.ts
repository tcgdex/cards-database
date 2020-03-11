import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-46",
	localId: 46,

	// Card informations
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 425,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/46/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/46/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Minimize",
			fr: "Lilliput",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Drifloon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à Baudrive par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pull",
			fr: "Tirer",
		},
		text: {
			en: "Flip a coin. If heads, switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
			fr: "Lancez une pièce. Si c'est face, échangez le Pokémon Défenseur avec un Pokémon de Banc de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
