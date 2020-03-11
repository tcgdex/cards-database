import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-176",
	localId: 176,

	// Card informations
	name: {
		en: "Stakataka-GX",
		fr: "Ama-Ama-GX",
	},

	hp: 180,

	type: [
		Type.METAL,
	],

	dexId: 805,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/176/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/176/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/176/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/176/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1177,
		type: AbilityType.TALENT,
		name: {
			en: "Ultra Wall",
			fr: "Ultra-Mur",
		},
		text: {
			en: "Your Ultra Beasts take 10 less damage from your opponent's attacks (after applying Weakness and Resistance).",
			fr: "Vos Ultra-Chimères subissent 10 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Gigaton Stomp",
			fr: "Écrasement Gigatonne",
		},
		damage: 120
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Assembly-GX",
			fr: "Empilage-GX",
		},
		text: {
			en: "This attack does 50 more damage for each Prize card you have taken. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
