import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-35",
	localId: 35,

	// Card informations
	name: {
		en: "Clawitzer BREAK",
		fr: "Gamblast TURBO",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 693,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/35/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/35/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/35/high.png",
		},
	},

	evolveFrom: {
		en: "Clawitzer",
		fr: "Gamblast",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lock-On",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn. During your next turn, any damage done to that Pokémon by attacks is increased by 120 (after applying Weakness and Resistance).",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Verrouillage",
		},
		text: {
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire. Pendant votre prochain tour, tous les dégâts infligés au Pokémon par des attaques sont augmentés de 120 (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

