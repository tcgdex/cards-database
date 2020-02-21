import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-35",
	localId: 35,

	// Card informations
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 537,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/35/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/35/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/35/high",
		},
	},

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Siphon Off",
			fr: "Aspiration",
		},
		text: {
			en: "Attach 3 Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez 3 cartes Énergie de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Shaky Fall",
			fr: "Chute Précaire",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused. That Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Le Pokémon ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
