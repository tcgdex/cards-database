import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY61",
	localId: "XY61",

	// Card informations
	name: {
		en: "Flygon-EX",
		fr: "Libégon-eEX",
	},

	hp: 170,

	type: [
		Type.DRAGON,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY61/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY61/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Toyste Beach",

	abilities: [{
		id: 1349,
		type: AbilityType.TALENT,
		name: {
			en: "Voice of the Sands",
			fr: "Voix du Désert",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Buzz",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
