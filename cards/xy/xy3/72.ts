import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-72",
	localId: 72,

	// Card informations
	name: {
		en: "Sylveon",
		fr: "Nymphali",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 700,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/72/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/72/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/72/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
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
			Type.FAIRY
		],
		name: {
			en: "Curly Ribbon",
			fr: "Ruban Bouclé",
		},
		text: {
			en: "Move an Energy attached to your opponent's Active Pokémon to 1 of his or her Benched Pokémon.",
			fr: "Déplacez une Énergie attachée au Pokémon Actif de votre adversaire vers l'un des Pokémon de Banc de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Echoed Voice",
			fr: "Écho",
		},
		text: {
			en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
