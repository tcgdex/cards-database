import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM93",
	localId: "SM93",

	// Card informations
	name: {
		en: "Marshadow",
		fr: "Marshadow",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 802,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM93/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM93/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shadowy Echoes",
			fr: "Échos Obscurs",
		},
		text: {
			en: "Put a Basic Pokémon from each player's discard pile onto its owner's Bench.",
			fr: "Prenez un Pokémon de base dans la pile de défausse de chaque joueur et placez-le sur son Banc.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
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
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
