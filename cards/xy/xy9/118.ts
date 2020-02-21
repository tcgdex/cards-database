import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-118",
	localId: 118,

	// Card informations
	name: {
		en: "Darkrai-EX",
		fr: "Darkrai-EX",
	},

	hp: 180,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/118/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/118/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Pulse",
			fr: "Vibrobscur",
		},
		text: {
			en: "This attack does 20 more damage for each Darkness Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Head",
			fr: "Tête Obscure",
		},
		text: {
			en: "If your opponent's Active Pokémon is Asleep, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
