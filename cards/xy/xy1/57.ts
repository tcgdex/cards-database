import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-57",
	localId: 57,

	// Card informations
	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 711,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/57/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/57/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/57/high",
		},
	},

	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
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
			Type.PSYCHIC
		],
		name: {
			en: "Eerie Voice",
			fr: "Voix Lugubre",
		},
		text: {
			en: "Put 2 damage counters on each of your opponent's Pokémon.",
			fr: "Placez 2 marqueurs de dégâts sur chaque Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Spirit Scream",
			fr: "Cri de l'Âme",
		},
		text: {
			en: "Put damage counters on both Active Pokémon until the remaining HP of each Pokémon is 10.",
			fr: "Placez des marqueurs de dégâts sur les deux Pokémon Actifs jusqu'à ce que chaque Pokémon ait 10 PV.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
