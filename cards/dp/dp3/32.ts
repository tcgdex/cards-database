import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-32",
	localId: 32,

	// Card informations
	name: {
		en: "Minun",
		fr: "Negapi",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 312,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/32/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/32/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 865,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Minus Charge",
			fr: "Recharge négative",
		},
		text: {
			en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, you may draw 2 cards. You can't use more than 1 Minus Charge Poké-Power each turn. This power can't be used if Minun is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vos Pokémon ont été mis K.O lors du dernier tour de votre adversaire, vous pouvez piocher 2 cartes. Vous ne pouvez pas utiliser plus d'1 Poké-Power Recharge négative par tour. Ce pouvoir ne peut pas être utilisé si Negapi est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Tag Play (-)",
			fr: "Jeu du chat (-)",
		},
		text: {
			en: "If you have Plusle on your Bench, you may move an Energy card attached to Minun to 1 of your Benched Pokémon.",
			fr: "Si Posipi se trouve sur votre Banc, vous pouvez déplacer une carte Énergie attachée à Negapi sur 1 des Pokémon de votre Banc.",
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
