import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-63",
	localId: 63,

	// Card informations
	name: {
		en: "M Mewtwo-EX",
		fr: "Méga-Mewtwo-EEX",
	},

	hp: 230,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/63/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/63/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/63/high",
		},
	},

	evolveFrom: {
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Vanishing Strike",
			fr: "Frappe Fuyante",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 50 more damage, and this attack's damage isn't affected by Resistance or any effects on your opponent's Active Pokémon.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires, et les dégâts de cette attaque ne sont pas affectés par la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
