import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-106",
	localId: 106,

	// Card informations
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 683,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/106/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/106/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/106/high",
		},
	},

	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Heavy Perfume",
			fr: "Parfum Enivrant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused. Put 6 damage counters instead of 3 on that Pokémon for this Special Condition.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Placez 6 marqueurs de dégâts au lieu de 3 sur le Pokémon ciblé pour cet État Spécial.",
		},
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Hug",
			fr: "Câlin",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
