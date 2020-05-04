import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-36",
	localId: 36,

	// Card informations
	name: {
		en: "Plusle",
		fr: "Posipi",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 311,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/36/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/36/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 329,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Plus Charge",
			fr: "Recharge positive",
		},
		text: {
			en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand. You can't use more than 1 Plus Charge Poké-Power each turn. This power can't be used if Plusle is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vos Pokémon ont été mis K.O lors du dernier tour de votre adversaire, vous pouvez chercher dans votre pile de défausse jusqu'à 2 cartes Énergie de base. Montrez-les à votre adversaire et placez-les dans votre main. Vous ne pouvez pas utiliser plus d'1 Poké-Power Recharge positive par tour. Ce pouvoir ne peut pas être utilisé si Posipi est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Tag Play (+)",
			fr: "Jeu du chat (+)",
		},
		text: {
			en: "If you have Minun on your Bench, you may do 20 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si Negapi se trouve sur votre Banc, vous pouvez infliger 20 dégâts à n'importe quel Pokémon de Banc.  (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
