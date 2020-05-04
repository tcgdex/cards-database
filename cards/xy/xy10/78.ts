import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-78",
	localId: 78,

	// Card informations
	name: {
		en: "Lugia",
		fr: "Lugia",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/78/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/78/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "TOKIYA",

	abilities: [{
		id: 256,
		type: AbilityType.TALENT,
		name: {
			en: "Pressure",
			fr: "Pression",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, any damage done by attacks from your opponent's Active Pokémon is reduced by 20 (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, tous les dégâts infligés par des attaques du Pokémon Actif de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Intensifying Burn",
			fr: "Rage Brûlante",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
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

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
