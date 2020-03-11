import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM74",
	localId: "SM74",

	// Card informations
	name: {
		en: "Regirock",
		fr: "Regirock",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 377,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM74/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM74/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",

	abilities: [{
		id: 638,
		type: AbilityType.TALENT,
		name: {
			en: "Rock Peak Growl",
			fr: "Pic Rocheux Grondant",
		},
		text: {
			en: "Your Registeel's attacks do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Registeel infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Tough Swing",
			fr: "Frappe Solide",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
