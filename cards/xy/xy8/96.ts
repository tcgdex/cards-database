import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-96",
	localId: 96,

	// Card informations
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/96/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/96/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/96/high",
		},
	},

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pain Amplifier",
			fr: "Amplificateur de Douleur",
		},
		text: {
			en: "Put 3 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
			fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Away",
			fr: "Asticotage",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
