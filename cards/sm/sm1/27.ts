import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-27",
	localId: 27,

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
			en: "https://assets.tcgdex.net/en/sm/sm1/27/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/27/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/27/high.png",
		},
	},

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
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

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

