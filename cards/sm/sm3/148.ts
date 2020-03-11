import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-148",
	localId: 148,

	// Card informations
	name: {
		en: "Golisopod-GX",
		fr: "Sarmuraï-GX",
	},

	hp: 210,

	type: [
		Type.GRASS,
	],

	dexId: 768,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/148/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/148/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/148/high",
		},
	},

	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "First Impression",
			fr: "Escarmouche",
		},
		text: {
			en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Armor Press",
			fr: "Pression Cuirassée",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 100
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crossing Cut-GX",
			fr: "Coupe Croisée-GX",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
