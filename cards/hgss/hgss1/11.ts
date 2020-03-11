import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-11",
	localId: 11,

	// Card informations
	name: {
		en: "Shuckle",
		fr: "Caratroc",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 213,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/11/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/11/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: -1,
		type: AbilityType.POKEBODY,
		name: {
			fr: "Coquille barricade",
		},
		text: {
			fr: "Tant que Caratroc est sur le Banc, prévenez tous les dégâts infligés à Caratroc par des attaques (les vôtres et celles de votre adversaire).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
