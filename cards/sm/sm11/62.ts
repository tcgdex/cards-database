import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-62",
	localId: 62,

	// Card informations
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 596,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/62/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/62/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/62/high",
		},
	},

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 58,
		name: "Yumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Live Wire",
			fr: "Fil Sous Tension",
		},
		text: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
