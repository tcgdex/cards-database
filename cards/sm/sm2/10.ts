import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-10",
	localId: 10,

	// Card informations
	name: {
		en: "Victini",
		fr: "Victini",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/10/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/10/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},

	abilities: [{
		id: 308,
		type: AbilityType.TALENT,
		name: {
			en: "Victory Star",
			fr: "Victorieux",
		},
		text: {
			en: "Once during your turn, after you flip any coins for an attack, you may ignore all results of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.",
			fr: "Une seule fois pendant votre tour, après avoir lancé des pièces pour une attaque, vous pouvez ignorer le résultat de ces lancers de pièce et lancer ces pièces à nouveau. Vous ne pouvez utiliser plus d’un talent Victorieux par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "V-Flame",
			fr: "V-Flamme",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

