import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-SM196",
	localId: "SM196",

	// Card informations
	name: {
		fr: "Mewtwo-GX",
	},

	hp: 190,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM196/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM196/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 196,
		name: "MPC Film"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			fr: "Lévikinésie",
		},
		text: {
			fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Vibration Régnante",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 120
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Nova Psy-GX",
		},
		text: {
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Détective Pikachu",
		code: "det1"
	}
}

export default card
