import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-37",
	localId: 37,

	// Card informations
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 486,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/37/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/37/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 323,
		type: AbilityType.POKEBODY,
		name: {
			en: "Recover Mechanism",
			fr: "Mécanisme de récupération",
		},
		text: {
			en: "When you attach an Energy card from your hand to Regigigas, remove all Special Conditions from Regigigas.",
			fr: "Lorsque vous attachez une carte Énergie de votre main à Regigigas, retirez-lui tous ses États Spéciaux.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gigaton Punch",
			fr: "Gigaton poing",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires et inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
