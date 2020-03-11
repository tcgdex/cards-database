import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-45",
	localId: 45,

	// Card informations
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 584,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/45/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/45/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/45/high",
		},
	},

	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Frigid Breath",
			fr: "Souffle Glaçon",
		},
		text: {
			en: "Until the end of your next turn, each player can't play any Supporter or Stadium cards from his or her hand.",
			fr: "Jusqu'à la fin de votre prochain tour, aucun joueur ne peut jouer de cartes Supporter ou Stade de sa main.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Deep Freeze",
			fr: "Gel Intense",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed. If tails, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
