import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM38",
	localId: "SM38",

	// Card informations
	name: {
		en: "Incineroar-GX",
		fr: "Félinferno-GX",
	},

	hp: 250,

	type: [
		Type.FIRE,
	],

	dexId: 727,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM38/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM38/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM38/high",
		},
	},

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Hustling Strike",
			fr: "Frappe Bousculante",
		},
		text: {
			en: "This attack does 20 more damage for each of your Benched Fire Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc Fire.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Tiger Swing",
			fr: "Projection de Tigre",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 80
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Burning Slam-GX",
			fr: "Percussion Brûlante-GX",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned. (You can't use more than 1 GX attack in a game.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
