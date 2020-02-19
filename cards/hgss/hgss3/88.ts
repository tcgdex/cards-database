import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-88",
	localId: 88,

	// Card informations
	name: {
		en: "Kyogre & Groudon LEGEND",
		fr: "Kyogre & Groudon LÉGENDE",
	},



	type: [
		Type.WATER,
		Type.FIGHTING,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/88/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/88/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],





	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Tidal Wave",
			fr: "Méga raz-de-marée",
		},
		text: {
			en: "Discard the top 5 cards from your opponent's deck. This attack does 30 damage times the number of Energy cards you discarded to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez les 5 cartes du dessus du deck de votre adversaire. Cette attaque inflige 30 dégâts, multipliés par le nombre de cartes Énergie que vous avez défaussées, à chacun des Pokémon qui se trouve sur le Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Massive Eruption",
			fr: "Éruption massive",
		},
		text: {
			en: "Discard the top 5 cards from your deck. This attack does 100 damage times the number of Energy cards you discarded.",
			fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
		},
		damage: 100
	},{
		name: {
			fr: "",
		},
		text: {
			fr: "Placez cette carte sur votre Banc uniquement avec l'autre moitié de Kyogre & Groudon LÉGENDE.",
		},
	},{
		name: {},
		text: {
			fr: "Lorsque ce Pokémon est mis K.O., votre adversaire prend 2 cartes Récompense.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	},{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

