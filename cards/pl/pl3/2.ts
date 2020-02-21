import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-2",
	localId: 2,

	// Card informations
	name: {
		en: "Blaziken FB",
		fr: "Brasegali ",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/2/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/2/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 114,
		name: "Motofumi Fujiwara"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Luring Flame",
			fr: "Flamme attrayante",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned.",
			fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Brûlé.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Vapor Kick",
			fr: "Coup de buée",
		},
		text: {
			en: "If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage.",
			fr: "Si votre adversaire possède des Pokémon Water en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
