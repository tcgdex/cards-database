import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-70",
	localId: 70,

	// Card informations
	name: {
		en: "Koffing",
		fr: "Smogo",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/70/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/70/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smokescreen",
			fr: "Brouillard",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, votre adversaire lance une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Suffocating Gas",
			fr: "Gaz suffocant",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
