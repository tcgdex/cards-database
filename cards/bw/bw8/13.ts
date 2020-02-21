import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-13",
	localId: 13,

	// Card informations
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 591,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/13/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/13/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/13/high",
		},
	},

	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Astonish",
			fr: "Étonnement",
		},
		text: {
			en: "Flip a coin. If heads, choose 3 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into his or her deck.",
			fr: "Lancez une pièce. Si c'est face, choisissez 3 cartes au hasard de la main de votre adversaire. Votre adversaire montre les cartes choisies et les mélange avec son deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Miracle Powder",
			fr: "Poudre Miracle",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
			fr: "Lancez une pièce. Si c'est face, choisissez 1 État Spécial. Le Pokémon Défenseur est maintenant affecté par l'État Spécial choisi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
