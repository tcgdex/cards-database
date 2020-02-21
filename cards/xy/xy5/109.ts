import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-109",
	localId: 109,

	// Card informations
	name: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 329,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/109/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/109/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/109/high",
		},
	},

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sand Attack",
			fr: "Jet de Sable",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Super Vibration",
			fr: "Super Vibration",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
