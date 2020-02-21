import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-1",
	localId: 1,

	// Card informations
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 127,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/1/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/1/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Pinch",
			fr: "Pinces Vigoureuses",
		},
		text: {
			en: "Flip 2 coins. For each heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Grip and Squeeze",
			fr: "Empoigne Puissante",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
