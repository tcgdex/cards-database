import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-83",
	localId: 83,

	// Card informations
	name: {
		en: "Staryu",
		fr: "Stari Niv. 18",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 120,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/83/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/83/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cosmic Draw",
			fr: "Pioche cosmik",
		},
		text: {
			en: "If your opponent has any Evolved Pokémon in play, draw 3 cards.",
			fr: "Si votre adversaire possède des Pokémon Évolués en jeu, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Swift",
			fr: "Météores",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
