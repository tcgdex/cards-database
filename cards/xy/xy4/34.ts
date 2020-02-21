import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-34",
	localId: 34,

	// Card informations
	name: {
		en: "Gengar-EX",
		fr: "Ectoplasma-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Night Attack",
			fr: "Attaque Nocturne",
		},
		text: {
			en: "Put 3 damage counters on 1 of your opponent's Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Corridor",
			fr: "Couloir Ténébreux",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
