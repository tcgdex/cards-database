import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-52",
	localId: 52,

	// Card informations
	name: {
		en: "Reuniclus",
		fr: "Symbios",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 579,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/52/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/52/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/52/high",
		},
	},

	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Future Sight",
			fr: "Prescience",
		},
		text: {
			en: "Look at the top 5 cards of your deck and put them back on top of your deck in any order.",
			fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Net Force",
			fr: "Force Accrue",
		},
		text: {
			en: "Does 40 damage times the number of Reuniclus you have in play.",
			fr: "Inflige 40 dégâts multipliés par le nombre de Symbios que vous avez en jeu.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
