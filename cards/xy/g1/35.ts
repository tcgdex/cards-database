import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-35",
	localId: 35,

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
			en: "https://assets.tcgdex.net/en/xy/g1/35/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/35/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/35/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Saya Tsuruta",



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
		name: "Generations",
		code: "g1"
	}
}

export default card
