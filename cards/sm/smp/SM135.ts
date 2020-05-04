import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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


	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
