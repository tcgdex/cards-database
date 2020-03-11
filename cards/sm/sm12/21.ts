import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-21",
	localId: 21,

	// Card informations
	name: {
		en: "Buzzwole",
		fr: "Mouscoto",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 794,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Anesaki Dynamic",

	abilities: [{
		id: 1009,
		type: AbilityType.TALENT,
		name: {
			en: "Beast Boost",
			fr: "Boost Chimère",
		},
		text: {
			en: "This Pokémon's attacks do 20 more damage to your opponent's Active Pokémon for each Prize card you have taken (before applying Weakness and Resistance).",
			fr: "Pour chaque carte Récompense que vous avez récupérée, les attaques de ce Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Touchdown",
			fr: "Touchdown",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
