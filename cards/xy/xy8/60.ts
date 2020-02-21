import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-60",
	localId: 60,

	// Card informations
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/60/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/60/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/60/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sinister Fog",
			fr: "Brouillard Sinistre",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 1 damage counter on each of your opponent's Benched Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 1 marqueur de dégâts sur chacun des Pokémon de Banc de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Creep Show",
			fr: "Spectacle Perturbant",
		},
		text: {
			en: "If your opponent's Active Pokémon has 3 or more damage counters on it, that Pokémon is Knocked Out.",
			fr: "Si le Pokémon Actif de votre adversaire a 3 marqueurs de dégâts ou plus, ce dernier est mis K.O.",
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



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
