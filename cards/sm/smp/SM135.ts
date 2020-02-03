import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM135",
	localId: "SM135",

	// Card informations
	name: {
		en: "Latias",
		fr: "Latias",
	},

	hp: 110,

	type: [
		Type.DRAGON,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM135/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM135/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM135/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM135/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Mist Ball",
			fr: "Ball’Brume",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy and a Psychic Energy from this Pokémon.",
			fr: "Lancez une pièce. Si c’est pile, défaussez une Énergie Fire et une Énergie Psychic de ce Pokémon.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

