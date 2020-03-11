import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-28",
	localId: 28,

	// Card informations
	name: {
		en: "Regice",
		fr: "Regice",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 378,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/28/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/28/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1202,
		type: AbilityType.TALENT,
		name: {
			en: "Iceberg Shield",
			fr: "Bouclier Iceberg",
		},
		text: {
			en: "If you have Regirock in play, prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Stage 2 Pokémon.",
			fr: "Si vous avez Regirock en jeu, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon de Niveau 2 de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
