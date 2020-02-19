import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-12",
	localId: 12,

	// Card informations
	name: {
		en: "Venomoth-GX",
		fr: "Aéromite-GX",
	},

	hp: 200,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/12/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/12/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/12/high.png",
		},
	},

	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shinobi Mastery",
			fr: "Maîtrise Shinobi",
		},
		text: {
			en: "If you played Koga's Trap from your hand during this turn, this attack does 90 more damage. If you played Janine from your hand during this turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn.",
			fr: "Si vous avez joué Piège de Koga de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires. Si vous avez joué Jeannine de votre main pendant ce tour, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base pendant le prochain tour de votre adversaire.",
		},
		damage: 110
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ten-Card Return-GX",
			fr: "Dix Cartes Retrouvées-GX",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw 10 cards. (You can't use more than 1 GX attack in a game.)",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

