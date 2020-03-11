import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-39",
	localId: 39,

	// Card informations
	name: {
		en: "Electrode G",
		fr: "Electrode  Niv. 38",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/39/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/39/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: "Yusuke Ishikawa",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Reckless Bomb",
			fr: "Bombe imprudente",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Electrode does 100 damage to itself.",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Electrode  s'inflige 100 dégâts.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reflect Energy",
			fr: "Renvoi d'énergie",
		},
		text: {
			en: "Move an Energy card attached to Electrode to 1 of your Benched Pokémon.",
			fr: "Déplacez une carte Énergie attachée à Electrode  sur 1 des Pokémon de votre Banc.",
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
