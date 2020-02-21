import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-72",
	localId: 72,

	// Card informations
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},

	hp: 120,

	type: [
		Type.FAIRY,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/72/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/72/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/72/high",
		},
	},

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 112,
		name: "0313"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Punishing Slap",
			fr: "Frappe Éprouvante",
		},
		text: {
			en: "If any of your opponent's Pokémon have any Darkness Energy attached to them, this attack does 60 more damage.",
			fr: "Si de l’Énergie Darkness est attachée à l’un des Pokémon de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
