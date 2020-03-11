import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-59",
	localId: 59,

	// Card informations
	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 781,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/59/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/59/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hasuno",

	abilities: [{
		id: 1337,
		type: AbilityType.TALENT,
		name: {
			en: "Steelworker",
			fr: "Expert Acier",
		},
		text: {
			en: "Your Metal Pokémon's attacks do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Metal infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Anchor Shot",
			fr: "Ancrage",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 70
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
