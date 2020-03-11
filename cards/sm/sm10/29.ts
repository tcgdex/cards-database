import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-29",
	localId: 29,

	// Card informations
	name: {
		en: "Incineroar",
		fr: "Félinferno",
	},

	hp: 160,

	type: [
		Type.FIRE,
	],

	dexId: 727,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/29/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/29/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/29/high",
		},
	},

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Misa Tsutsui",

	abilities: [{
		id: 59,
		type: AbilityType.TALENT,
		name: {
			en: "Strong Cheer",
			fr: "Acclamation Forte",
		},
		text: {
			en: "Your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You can't apply more than 1 Strong Cheer Ability at a time.",
			fr: "Les attaques de vos Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Acclamation Forte à la fois.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
