import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-146",
	localId: 146,

	// Card informations
	name: {
		en: "Uxie",
		fr: "Créhelf",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 480,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/146/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/146/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/146/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 436,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Trade Off",
			fr: "Compensation",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck. This power can't be used if Uxie is affected by a Special Condition. You can't use more than 1 Trade Off Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck. Choisissez-en 1 et placez-la dans votre main. Placez l'autre carte au dessous de votre deck. Ce pouvoir ne peut pas être utilisé si Créhelf est affecté par un État Spécial. Vous ne pouvez pas utiliser plus d'1 Poké-Power Compensation par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Zen Blade",
			fr: "Lame zen",
		},
		text: {
			en: "Uxie can't use Zen Blade during your next turn.",
			fr: "Créhelf ne peut pas utiliser Lame zen lors de votre prochain tour.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
