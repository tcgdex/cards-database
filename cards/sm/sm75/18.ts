import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-18",
	localId: 18,

	// Card informations
	name: {
		en: "Kingdra-GX",
		fr: "Hyporoi-GX",
	},

	hp: 230,

	type: [
		Type.WATER,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/18/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/18/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/18/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	tags: [
		Tag.GX,
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
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "This attack does 50 more damage times the amount of Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Reverse Thrust",
			fr: "Poussée Inverse",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Maelstrom-GX",
			fr: "Maelström-GX",
		},
		text: {
			en: "This attack does 40 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 40 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
