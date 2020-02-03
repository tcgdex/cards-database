import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-45",
	localId: 45,

	// Card informations
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 603,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/45/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/45/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/45/high.png",
		},
	},

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 35,
		name: "OOYAMA"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Small Appetite",
			fr: "Petit Appétit",
		},
		text: {
			en: "If your opponent's Active Pokémon's maximum HP is 100 or more, this attack does nothing.",
			fr: "Si les PV maximum du Pokémon Actif de votre adversaire sont de 100 ou plus, cette attaque ne fait rien.",
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

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

