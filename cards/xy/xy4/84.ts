import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-84",
	localId: 84,

	// Card informations
	name: {
		en: "Loudred",
		fr: "Ramboum",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 294,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/84/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/84/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/84/high",
		},
	},

	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Press",
			fr: "Pression Énergétique",
		},
		text: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
