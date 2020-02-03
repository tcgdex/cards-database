import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy8/103/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/103/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/103/high.png",
		},
	},

	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

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

