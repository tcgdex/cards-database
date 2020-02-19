import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY19",
	localId: "XY19",

	// Card informations
	name: {
		en: "Delphox-EX",
		fr: "Goupelin-EX",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],

	dexId: 655,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY19/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY19/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY19/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wonder Flare",
			fr: "Flamme Miracle",
		},
		text: {
			en: "Your opponent reveals his or her hand. This attack does 40 more damage for each Energy card in your opponent's hand.",
			fr: "Votre adversaire montre sa main. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Énergie dans la main de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

