import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-102",
	localId: 102,

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
			en: "https://assets.tcgdex.net/en/sm/sm7/102/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/102/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

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

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
