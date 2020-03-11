import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-6",
	localId: 6,

	// Card informations
	name: {
		en: "Servine",
		fr: "Lianaja",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 496,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/6/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/6/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/6/high",
		},
	},

	evolveFrom: {
		en: "Snivy",
		fr: "Vipélierre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 879,
		type: AbilityType.TALENT,
		name: {
			en: "Serpentine Strangle",
			fr: "Étranglement Serpentin",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
