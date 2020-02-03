import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-51",
	localId: 51,

	// Card informations
	name: {
		en: "Throh",
		fr: "Judokrak",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 538,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/51/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/51/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/51/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Freestyle Strike",
			fr: "Randori",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shoulder Throw",
			fr: "Projection Martiale",
		},
		text: {
			en: "Does 80 damage minus 20 damage for each Colorless in the Defending Pokémon's Retreat Cost.",
			fr: "Inflige 80 dégâts moins 20 dégâts pour chaque Colorless dans le coût de Retraite du Pokémon Défenseur.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

