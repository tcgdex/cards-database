import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-7",
	localId: 7,

	// Card informations
	name: {
		en: "Leavanny",
		fr: "Manternel",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 542,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/7/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/7/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/7/high",
		},
	},

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nurturing",
			fr: "Affection",
		},
		text: {
			en: "Choose 1 of your Pokémon. Search your deck for a card that evolves from that Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
			fr: "Choisissez 1 de vos Pokémon. Cherchez dans votre deck une carte Évolution du Pokémon choisi et placez-la sur celui-ci. (Cela équivaut à faire évoluer le Pokémon choisi.) Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "X-Scissor",
			fr: "Plaie-Croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
