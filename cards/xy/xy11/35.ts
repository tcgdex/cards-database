import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy11/35/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/35/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/35/high",
		},
	},

	evolveFrom: {
		en: "Clawitzer",
		fr: "Gamblast",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



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







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
