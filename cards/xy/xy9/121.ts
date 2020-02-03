import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-121",
	localId: 121,

	// Card informations
	name: {
		en: "Ho-Oh-EX",
		fr: "Ho-Oh-EX",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/121/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/121/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/121/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/121/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 1088,
		type: AbilityType.TALENT,
		name: {
			en: "Purifying Fire",
			fr: "Feu Purifiant",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon has any basic Fire Energy attached to it, you may heal 50 damage from it.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si de l'Énergie Fire de base est attachée à ce Pokémon, vous pouvez soigner 50 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Elemental Feather",
			fr: "Plume Élémentaire",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

