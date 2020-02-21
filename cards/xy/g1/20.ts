import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-20",
	localId: 20,

	// Card informations
	name: {
		en: "Cloyster",
		fr: "Crustabri",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 91,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/20/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/20/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/20/high",
		},
	},

	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Clamp Crush",
			fr: "Pince Broyeuse",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and discard an Energy attached to that Pokémon.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie lui étant attachée.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Spike Cannon",
			fr: "Picanon",
		},
		text: {
			en: "Flip 5 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 5 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
