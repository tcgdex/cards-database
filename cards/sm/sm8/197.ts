import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-197",
	localId: 197,

	// Card informations
	name: {
		en: "Virizion-GX",
		fr: "Viridium-GX",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	dexId: 640,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/197/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/197/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/197/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/197/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Draw",
			fr: "Double Pioche",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Sensitive Blade",
			fr: "Lame Sensible",
		},
		text: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 80 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Breeze Away-GX",
			fr: "Brise Opportune-GX",
		},
		text: {
			en: "Put any number of your Pokémon in play and all cards attached to them into your hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Placez autant de vos Pokémon en jeu que vous voulez, ainsi que toutes les cartes qui leur sont attachées, dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
