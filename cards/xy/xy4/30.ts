import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-30",
	localId: 30,

	// Card informations
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 695,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/30/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/30/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/30/high",
		},
	},

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Parabolic Spark",
			fr: "Parabétincelle",
		},
		text: {
			en: "Discard as many Lightning Energy attached to your Pokémon as you like. This attack does 30 damage times the number of Energy cards you discarded.",
			fr: "Défaussez autant d'Énergies Lightning attachées à vos Pokémon que vous voulez. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
