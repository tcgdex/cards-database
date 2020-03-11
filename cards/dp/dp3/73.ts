import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-73",
	localId: 73,

	// Card informations
	name: {
		en: "Venomoth",
		fr: "Aéromite",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/73/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/73/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/73/high",
		},
	},

	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 893,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dangerous Scales",
			fr: "Écailles dangereuses",
		},
		text: {
			en: "If Venomoth is your Active Pokémon and is damaged by an opponent's attack (even if Venomoth is Knocked Out), the Attacking Pokémon is now Asleep and Poisoned.",
			fr: "Si Aéromite est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Aéromite est mis K.O), le Pokémon Attaquant est maintenant Endormi et Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Disturbance Dive",
			fr: "Plongeon perturbant",
		},
		text: {
			en: "Prevent all effects of an attack, excluding damage, done to Venomoth during your opponent's next turn.",
			fr: "Prévenez tous les effets d'une attaque, dégâts exclus, infligés à Aéromite lors du prochain tour de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
