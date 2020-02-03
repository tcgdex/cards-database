import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-34",
	localId: 34,

	// Card informations
	name: {
		en: "Vaporeon",
		fr: "Aquali Niv. 48",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/34/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/34/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/34/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/34/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 363,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Undevelop",
			fr: "Dé-développer",
		},
		text: {
			en: "Once during your turn (before your attack), you may devolve Vaporeon and put Vaporeon into your hand. This power can't be used if Vaporeon is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez dés-évoluer Aquali et le placer dans votre main. Ce pouvoir ne peut pas être utilisé si Aquali est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Muddy Water",
			fr: "Ocroupi",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Evolving Aqua",
			fr: "Aqua évolutive",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If Vaporeon evolved from Eevee during this turn, this attack does 60 damage instead.",
			fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Si Aquali a évolué d'Evoli lors de ce tour, cette attaque inflige 60 dégâts à la place.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

