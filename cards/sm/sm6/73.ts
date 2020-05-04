import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-73",
	localId: 73,

	// Card informations
	name: {
		en: "Zygarde-GX",
		fr: "Zygarde-GX",
	},

	hp: 200,

	type: [
		Type.FIGHTING,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/73/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/73/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cell Connector",
			fr: "Connecteur de Cellules",
		},
		text: {
			en: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Land's Wrath",
			fr: "Force Chtonienne",
		},
		damage: 130
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Verdict-GX",
			fr: "Verdict-GX",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-GX et de Pokémon-EX pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
