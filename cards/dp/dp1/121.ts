import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-121",
	localId: 121,

	// Card informations
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 392,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/121/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/121/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/121/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/121/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 757,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Burning Head",
			fr: "Tête brûlante",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 3 cards of your deck, choose 1 of them, and put it into your hand. Discard the other 2 cards. This power can't be used if Infernape is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 3 cartes du dessus de votre deck. Choisissez-en 1 et placez-la dans votre main. Défaussez les 2 autres cartes. Ce pouvoir ne peut pas être utilisé si Simiabraz est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flare Up",
			fr: "Prise de bec",
		},
		text: {
			en: "Search your discard pile for 8 Fire Energy cards, show them to your opponent, and shuffle them into your deck. (This attack does nothing if you don't have 8 Fire Energy cards in your discard pile.)",
			fr: "Choisissez dans votre pile de défausse 8 cartes Énergie Fire, montrez-les à votre adversaire et mélangez-les à votre deck. (Cette attaque est sans effet si vous n'avez pas 8 cartes Énergie Fire dans votre pile de défausse.)",
		},
		damage: 150
	},{
		name: {
			fr: "Level-Up Rule",
		},
		text: {
			fr: "Placez cette carte sur votre Simiabraz Actif. Simiabraz LV X peut utiliser n'importe quel (le) attaque, Poké-Power ou Poké-Body de son Niveau précédent.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],





	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

