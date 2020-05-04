import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-51",
	localId: 51,

	// Card informations
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 107,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/51/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/51/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Detect",
			fr: "Détection",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Hitmonchan during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à Tygnon pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sky Uppercut",
			fr: "Stratopercut",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
