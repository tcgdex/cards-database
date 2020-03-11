import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-7",
	localId: 7,

	// Card informations
	name: {
		en: "Mismagius",
		fr: "Mismagius",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/7/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/7/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/7/high",
		},
	},

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		name: {
			en: "Crash Chant",
			fr: "Chant fracassant",
		},
		text: {
			en: "Choose up to 4 in any combination of Pokémon Tool cards and Technical Machine cards in play (both yours and your opponent's) and discard them. This attack does 20 damage times the number of cards discarded in this way.",
			fr: "Choisissez n'importe quelle combinaison de jusqu'à 4 cartes Outil Pokémon et cartes Machine Technique en jeu (les vôtres et celles de votre adversaire) et défaussez-les. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes défaussées de cette façon.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Horror Chant",
			fr: "Chant d'horreur",
		},
		text: {
			en: "If your opponent has 4 or more Benched Pokémon, choose 1 of them and return that Pokémon and all cards attached to it to your opponent's hand.",
			fr: "Si votre adversaire possède au moins 4 Pokémon de Banc, choisissez-en 1 et replacez-le ainsi que toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
