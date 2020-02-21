import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-77",
	localId: 77,

	// Card informations
	name: {
		en: "Chatot",
		fr: "Pijako",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 441,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/77/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/77/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Misinformation",
			fr: "Intox",
		},
		text: {
			en: "Discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
			fr: "Défaussez toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tone-Deaf",
			fr: "Dur d'Oreille",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
