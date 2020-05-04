import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-88",
	localId: 88,

	// Card informations
	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/88/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/88/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/88/high",
		},
	},

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Derail",
			fr: "Déraillement",
		},
		text: {
			en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée",
		},
		text: {
			en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
