import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM162",
	localId: "SM162",

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM162/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM162/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM162/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nuzzle",
			fr: "Frotte-Frimousse",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Jolt",
			fr: "Secousse Tonnerre",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s’inflige 10 dégâts.",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
