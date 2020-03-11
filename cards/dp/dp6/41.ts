import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-41",
	localId: 41,

	// Card informations
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/41/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/41/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 390,
		type: AbilityType.POKEBODY,
		name: {
			en: "White Smoke",
			fr: "Écran fumée",
		},
		text: {
			en: "As long as Torkoal is your Active Pokémon, prevent all effects, including damage, done to your Benched Pokémon by your opponent's attacks.",
			fr: "Tant que Chartor est votre Pokémon Actif, prévenez tous les effets d'une attaque, dégâts inclus, infligés à vos Pokémon de Banc par des attaques de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Black Soot",
			fr: "Suie noire",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned and Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé et Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
