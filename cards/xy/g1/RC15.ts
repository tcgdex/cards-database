import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC15",
	localId: "RC15",

	// Card informations
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 678,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC15/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC15/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC15/high",
		},
	},

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Ear Influence",
			fr: "Influence Otique",
		},
		text: {
			en: "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
			fr: "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de votre adversaire vers les autres Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
