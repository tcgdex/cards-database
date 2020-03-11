import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-141",
	localId: 141,

	// Card informations
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 472,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/141/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/141/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/141/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/141/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 428,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Shoot Poison",
			fr: "Coup d'poison",
		},
		text: {
			en: "Once during your turn (before your attack), when you put Gliscor LV.X from your hand onto your Active Gliscor, you may choose 1 of the Defending Pokémon. That Pokémon is now Paralyzed and Poisoned.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Scorvol NIV.X de votre main sur votre Scorvol Actif, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Paralysé et Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Night Slash",
			fr: "Tranche-Nuit",
		},
		text: {
			en: "You may switch Gliscor with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Scorvol avec 1 des Pokémon de votre Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
