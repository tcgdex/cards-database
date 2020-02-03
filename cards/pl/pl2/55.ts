import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-55",
	localId: 55,

	// Card informations
	name: {
		en: "Aerodactyl GL",
		fr: "Ptera  Niv. 62",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/55/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/55/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/55/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collectionner",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Primal Breath",
			fr: "Haleine primale",
		},
		text: {
			en: "Your opponent can't play any Pokémon from his or her hand to evolve or to Level-Up the Defending Pokémon during his or her next turn.",
			fr: "Votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ou faire passer au Niveau Supérieur le Pokémon Défenseur lors de son prochain tour.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

