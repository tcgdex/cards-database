import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-9",
	localId: 9,

	// Card informations
	name: {
		en: "Sceptile",
		fr: "Jungko",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/9/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/9/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/9/high",
		},
	},

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "hatachu",

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Barrière Ω",
		},
		text: {
			fr: "Chaque fois que votre adversaire joue une carte Dresseur (excepté les Outils Pokémon et les cartes Stade), évitez tous les effets de la carte Dresseur sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leaf Blade",
			fr: "Lame-Feuille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Power Poison",
			fr: "Poison Puissant",
		},
		text: {
			en: "Discard 1 Energy attached to this Pokémon. Your opponent's Active Pokémon is now Poisoned.",
			fr: "Défaussez une Énergie attachée à ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
