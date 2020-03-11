import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-10",
	localId: 10,

	// Card informations
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/10/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/10/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kazuyuki Kano",

	abilities: [{
		id: 1059,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Phoenix Turn",
		},
		text: {
			en: "Once during your opponent's turn, if Ho-Oh would be Knocked Out by damage from an attack, you may flip a coin. If heads, Ho-Oh isn't discarded. Instead, remove all damage counters, Special Conditions, and other effects from Ho-Oh. Then, discard all cards attached to Ho-Oh (except for Energy cards). This counts as Ho-Oh being Knocked Out and your opponent takes a Prize card.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Wing",
			fr: "Coup du phoenix",
		},
		text: {
			en: "This attack does 20 damage times the number of different types of basic Energy cards attached to Ho-Oh.",
			fr: "Une seule fois lors du tour de votre adversaire, si Ho-Oh est mis K.O par les dégâts d'une attaque, vous pouvez lancer une pièce. Si c'est pile, Ho-Oh n'est pas défaussé. Retirez-lui à la place tous ses marqueurs de dégât, États Spéciaux et autres effets. Ensuite, défaussez toutes les cartes attachées à Ho-Oh (cartes Énergie exceptées). Ho-Oh est alors mis K.O et votre adversaire récolte une carte Récompense.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Aile arc-en-ciel",
		},
		text: {
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de types différents de cartes Énergie de base attachées à Ho-Oh.",
		},
		damage: "20×"
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
