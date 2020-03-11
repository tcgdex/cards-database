import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-103",
	localId: 103,

	// Card informations
	name: {
		en: "Florges",
		fr: "Florges",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 671,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/103/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/103/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/103/high",
		},
	},

	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 753,
		type: AbilityType.TALENT,
		name: {
			en: "Calming Aroma",
			fr: "Arôme Apaisant",
		},
		text: {
			en: "Each of your Pokémon's attacks costs Fairy less.",
			fr: "Chacune des attaques de vos Pokémon coûte Fairy de moins.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Wonder Shine",
			fr: "Éclat Merveilleux",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
