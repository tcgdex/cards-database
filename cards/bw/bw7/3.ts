import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-3",
	localId: 3,

	// Card informations
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/3/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/3/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/3/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 398,
		type: AbilityType.TALENT,
		name: {
			en: "Allergy Panic",
			fr: "Panique Allergique",
		},
		text: {
			en: "Apply Weakness for each Pokémon (both yours and your opponent's) as ×4 instead.",
			fr: "Appliquez une Faiblesse de x4 à chacun des Pokémon (les vôtres et ceux de votre adversaire).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pollen Spray",
			fr: "Crache-Pollen",
		},
		text: {
			en: "The Defending Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
