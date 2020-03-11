import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-14",
	localId: 14,

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
			en: "https://assets.tcgdex.net/en/hgss/hgss4/14/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/14/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/14/high",
		},
	},

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Lost Crush",
			fr: "Broyage perdu",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent's Pokémon and put it in the Lost Zone.",
			fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée à l'un des Pokémon de votre adversaire et placez-la dans la Zone Perdue.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Breakdown",
			fr: "Réaction",
		},
		text: {
			en: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
			fr: "Comptez le nombre de cartes dans la main de votre adversaire. Placez un nombre équivalent de marqueurs de dégât sur le Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
