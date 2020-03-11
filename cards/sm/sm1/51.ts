import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-51",
	localId: 51,

	// Card informations
	name: {
		en: "Charjabug",
		fr: "Chrysapile",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 737,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/51/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/51/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/51/high",
		},
	},

	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Shocking Jaws",
			fr: "Mâchoires Choquantes",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
