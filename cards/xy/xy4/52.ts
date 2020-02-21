import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-52",
	localId: 52,

	// Card informations
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/52/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/52/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/52/high",
		},
	},

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Nightmare Mambo",
			fr: "Valse Hantée",
		},
		text: {
			en: "If your opponent's Active Pokémon is Asleep, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
