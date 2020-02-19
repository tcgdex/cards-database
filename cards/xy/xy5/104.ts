import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-104",
	localId: 104,

	// Card informations
	name: {
		en: "Azumarill",
		fr: "Azumarill",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 184,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/104/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/104/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/104/high.png",
		},
	},

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Régénération α",
		},
		text: {
			fr: "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Tail Rap",
			fr: "Frap'Keu",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dwindling Wave",
			fr: "Vague Faiblissante",
		},
		text: {
			en: "This attack does 100 damage minus 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 100 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

