import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Medicham",
		fr: "Charmina",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 308,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/32/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/32/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/32/high.png",
		},
	},

	evolveFrom: {
		en: "Meditite",
		fr: "Meditikka",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Force Palm",
			fr: "Forte-Paume",
		},
		text: {
			en: "Count the number of damage counters on Medicham. Put that many damage counters on 1 of your opponent's Pokémon.",
			fr: "Comptabilisez le nombre de marqueurs de dégât sur Charmina. Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Kick",
			fr: "Coup tournant",
		},
		text: {
			en: "Medicham does 20 damage to itself.",
			fr: "Charmina s'inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

