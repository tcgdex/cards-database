import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-52",
	localId: 52,

	// Card informations
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 368,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/52/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/52/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/52/high",
		},
	},

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Croissance α",
		},
		text: {
			fr: "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
