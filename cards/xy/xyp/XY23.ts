import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY23",
	localId: "XY23",

	// Card informations
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY23/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY23/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY23/high.png",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Whisk Away",
			fr: "Fouet Renvoi",
		},
		text: {
			en: "Your opponent reveals his or her hand. Choose a Pokémon you find there and put it on the bottom of your opponent's deck. If you do, this attack does 30 more damage.",
			fr: "Votre adversaire montre sa main. Choisissez un Pokémon que vous y trouvez et placez-le en dessous du deck de votre adversaire. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spirit Dance",
			fr: "Danse Spirituelle",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
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

