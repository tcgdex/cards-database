import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-14",
	localId: 14,

	// Card informations
	name: {
		en: "Zapdos",
		fr: "Electhor",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/14/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/14/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/14/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 454,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sheet Lightning",
			fr: "Feuille éclair",
		},
		text: {
			en: "Once during your turn, when you put Zapdos from your hand onto your Bench, you may flip a coin. If heads, put 1 damage counter on each of your opponent's Pokémon.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Electhor de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Raging Thunder",
			fr: "Tonnerre déchaîné",
		},
		text: {
			en: "Does 40 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
			fr: "Inflige 40 dégâts à 1 de vos Pokémon. Vous ne pouvez pas appliquer la Faiblesse et la Résistance à ces dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

