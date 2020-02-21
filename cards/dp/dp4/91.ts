import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-91",
	localId: 91,

	// Card informations
	name: {
		en: "Unown L",
		fr: "Zarbi L",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/91/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/91/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},

	abilities: [{
		id: 895,
		type: AbilityType.POKEBODY,
		name: {
			en: "LINK",
			fr: "LIEN",
		},
		text: {
			en: "Unown L can use any attack from any Unown in play (both yours and your opponent's). (You still have to pay for that attack's Energy cost.)",
			fr: "Zarbi L peut utiliser n'importe quelle attaque des Zarbis en jeu (les vôtres et ceux de votre adversaire). (Vous devez toujours payer le Coût en Énergie de cette attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Search either player's discard pile for up to any 2 cards, show them to your opponent, and put them on top of that player's deck in any order you like.",
			fr: "Choisissez jusqu'à 2 cartes dans la pile de défausse d'1 des joueurs, montrez-les à votre adversaire et placez-les au dessus du deck de ce joueur dans n'importe quel ordre.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
