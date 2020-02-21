import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-114",
	localId: 114,

	// Card informations
	name: {
		en: "Sandile",
		fr: "Mascaïman",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 551,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/114/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/114/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Grandiose Fangs",
			fr: "Crocs Grandioses",
		},
		text: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, this Pokémon's attacks do 120 more damage to your opponent's Active Pokémon during your next turn (before applying Weakness and Resistance).",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, les attaques de ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire pendant votre prochain tour (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 30
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
