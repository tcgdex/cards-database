import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-97",
	localId: 97,

	// Card informations
	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 701,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/97/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/97/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "miki kudo",

	abilities: [{
		id: 555,
		type: AbilityType.TALENT,
		name: {
			en: "Sudden Cyclone",
			fr: "Cyclone Surprise",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
