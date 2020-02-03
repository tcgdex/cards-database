import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-117",
	localId: 117,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/117/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/117/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/117/high.png",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},

	abilities: [{
		id: 1396,
		type: AbilityType.TALENT,
		name: {
			en: "Tag Coach",
			fr: "Coaching d’Escouade",
		},
		text: {
			en: "Your TAG TEAM Pokémon take 20 less damage from your opponent's attacks (after applying Weakness and Resistance).",
			fr: "Vos Pokémon ESCOUADE subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Cross",
			fr: "Passage Éclair",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

