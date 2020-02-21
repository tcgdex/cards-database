import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Team Magma's Aggron",
		fr: "Galeking de la Team Magma",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/14/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/14/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/14/high",
		},
	},

	evolveFrom: {
		en: "Team Magma's Lairon",
		fr: "Galegon de la Team Magma",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Stomp",
			fr: "Écras'Roc",
		},
		text: {
			en: "Discard as many Fighting Energy attached to your Pokémon as you like. This attack does 40 damage times the amount of Fighting Energy you discarded.",
			fr: "Défaussez autant d'Énergies Fighting attachées à vos Pokémon que vous voulez. Cette attaque inflige 40 dégâts multipliés par le nombre de cartes Énergie Fighting que vous avez défaussées.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Boulder Storm",
			fr: "Tempête de Roche",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
