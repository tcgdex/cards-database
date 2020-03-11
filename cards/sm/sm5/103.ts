import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-103",
	localId: 103,

	// Card informations
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 463,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/103/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/103/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/103/high",
		},
	},

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yumi",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dangerous Lick",
			fr: "Lécher Dangereux",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 50 more damage for each heads. If the first flip is tails, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face. Si le premier lancer est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
