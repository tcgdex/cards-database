import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY144",
	localId: "XY144",

	// Card informations
	name: {
		en: "Yanmega",
		fr: "Yanmega",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 469,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY144/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY144/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY144/high",
		},
	},

	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 666,
		type: AbilityType.TALENT,
		name: {
			en: "Sonic Vision",
			fr: "Vision Sonique",
		},
		text: {
			en: "If you have exactly 4 cards in your hand, ignore all Energy in the attack cost of each of this Pokémon's attacks.",
			fr: "Si vous avez exactement 4 cartes dans votre main, ignorez toutes les Énergies dans le coût d’attaque de chacune des attaques de ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Assault Boom",
			fr: "Dégât d’Assaut",
		},
		text: {
			en: "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 70 more damage.",
			fr: "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
