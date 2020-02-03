import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-181",
	localId: 181,

	// Card informations
	name: {
		en: "Gumshoos",
		fr: "Argouste",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 735,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/181/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/181/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/181/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/181/high.png",
		},
	},

	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Alert Headbutt",
			fr: "Réveil Coup d’Boule",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-GX or Pokémon-EX, this attack's base damage is 30.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, les dégâts de base de cette attaque sont de 30.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
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

