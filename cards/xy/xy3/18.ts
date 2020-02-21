import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-18",
	localId: 18,

	// Card informations
	name: {
		en: "Politoed",
		fr: "Tarpaud",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 186,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/18/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 1415,
		type: AbilityType.TALENT,
		name: {
			en: "King's Song",
			fr: "Chant du Roi",
		},
		text: {
			en: "Ignore all Colorless Energy in the attack cost of each of your Poliwag, Poliwhirl, and Poliwrath's attacks.",
			fr: "Ignorez toutes les Énergies Colorless dans les coûts d'attaque des attaques de vos Ptitard, Têtarte et Tartard.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Voice",
			fr: "Mégaphone",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
