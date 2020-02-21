import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-128",
	localId: 128,

	// Card informations
	name: {
		en: "Chatot",
		fr: "Pijako",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 441,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/128/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/128/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/128/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sing",
			fr: "Berceuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aerial Ace",
			fr: "Aéropique",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
