import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-34",
	localId: 34,

	// Card informations
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 8,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/34/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/34/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/34/high",
		},
	},

	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hiroki Asanuma",

	abilities: [{
		id: 75,
		type: AbilityType.TALENT,
		name: {
			en: "Solid Shell",
			fr: "Coquille Dure",
		},
		text: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Aqua Slash",
			fr: "Aqua Slash",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
