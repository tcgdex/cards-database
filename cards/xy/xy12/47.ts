import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-47",
	localId: 47,

	// Card informations
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 92,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/47/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/47/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Little Grudge",
			fr: "Petite Rancune",
		},
		text: {
			en: "During your opponent's next turn, if this Pokémon is Knocked Out by damage from an attack, discard an Energy attached to the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O. par les dégâts d’une attaque, défaussez une Énergie attachée au Pokémon Attaquant.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Nightmare",
			fr: "Cauchemar",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
