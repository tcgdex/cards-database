import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-119",
	localId: 119,

	// Card informations
	name: {
		en: "Bouffalant",
		fr: "Frison",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 626,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/119/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/119/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/119/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/119/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 139,
		name: "Hiroki Asanuma"
	},

	abilities: [{
		id: 875,
		type: AbilityType.TALENT,
		name: {
			en: "Sap Sipper",
			fr: "Herbivore",
		},
		text: {
			en: "This Pokémon's attacks do 40 more damage to your opponent's Grass Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de ce Pokémon infligent 40 dégâts supplémentaires aux Pokémon Grass de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Derail",
			fr: "Déraillement",
		},
		text: {
			en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

