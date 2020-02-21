import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-11",
	localId: 11,

	// Card informations
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/11/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/11/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/11/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 263,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Burn",
		},
		text: {
			en: "All Energy attached to this Pokémon are Fire Energy instead of their usual type.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Spin",
			fr: "Talent : Dépense d’Énergie",
		},
		text: {
			en: "Discard 3 Energy attached to this Pokémon.",
			fr: "Toutes les Énergies attachées à ce Pokémon sont des Énergies Fire au lieu de leur type habituel.",
		},
		damage: 200
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			fr: "Danse Flamme",
		},
		text: {
			fr: "Défaussez 3 Énergies attachées à ce Pokémon.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
