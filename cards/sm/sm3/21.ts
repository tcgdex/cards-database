import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-21",
	localId: 21,

	// Card informations
	name: {
		en: "Ho-Oh-GX",
		fr: "Ho-Oh-GX",
	},

	hp: 190,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/21/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/21/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/21/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sacred Fire",
			fr: "Feu Sacré",
		},
		text: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Phoenix Burn",
			fr: "Éclat du Phénix",
		},
		text: {
			en: "This Pokémon can't use Phoenix Burn during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Éclat du Phénix pendant votre prochain tour.",
		},
		damage: 180
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Eternal Flame-GX",
			fr: "Flamme Éternelle-GX",
		},
		text: {
			en: "Put 3 in any combination of Fire Pokémon-GX or Fire Pokémon-EX from your discard pile onto your Bench. (You can't use more than 1 GX attack in a game.)",
			fr: "Ajoutez de votre pile de défausse à votre Banc une combinaison de 3 cartes choisies parmi des Pokémon-GX Fire et des Pokémon-EX Fire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

