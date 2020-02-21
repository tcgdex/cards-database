import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-23",
	localId: 23,

	// Card informations
	name: {
		en: "Banette",
		fr: "Branette",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 354,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/23/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/23/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/23/high",
		},
	},

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {
			en: "Ghost Head",
			fr: "Tête fantôme",
		},
		text: {
			en: "Put as many damage counters as you like on Banette. (You can't put more than Banette's remaining HP.) Put that many damage counters on the Defending Pokémon.",
			fr: "Placez sur Branette autant de marqueurs de dégât que vous le voulez. (Vous ne pouvez pas placer plus de marqueurs qu'il ne reste de PV à Branette.) Placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Spiteful Pain",
			fr: "Douleur malveillante",
		},
		text: {
			en: "If Banette is in your discard pile, this attack does 40 damage plus 40 more damage. Then, search your discard pile for Banette, show it to your opponent, and shuffle it into your deck.",
			fr: "Si Branette se trouve dans votre pile de défausse, cette attaque inflige 40 dégât plus 40 dégât supplémentaires. Ensuite, cherchez Branette dans votre pile de défausse , montrez-le à votre adversaire et mélangez-le à votre deck.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
