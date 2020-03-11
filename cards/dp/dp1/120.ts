import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-120",
	localId: 120,

	// Card informations
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/120/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/120/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/120/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 51,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Supreme Command",
			fr: "Commandant en chef",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose up to 2 cards from your opponent's hand without looking and put them face down next to the Defending Pokémon. (These cards are not in play or in your opponent's hand.) At the end of your opponent's next turn, return those cards to your opponent's hand. This power can't be used if Empoleon is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir sans regarder jusqu'à 2 cartes de la main de votre adversaire et les placer face cachée à côté du Pokémon Défenseur. (Ces cartes ne sont ni en jeu ni dans la main de votre adversaire.) À la fin du prochain tour de votre adversaire, replacez ces cartes dans la main de votre adversaire. Ce pouvoir ne peut pas être utilisé si Pingoléon est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Hydro Impact",
			fr: "Hydro-impact",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Empoleon can't attack during your next turn.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Pingoléon ne peut pas attaquer lors de votre prochain tour.",
		},
	},{
		name: {
			fr: "Level-Up Rule",
		},
		text: {
			fr: "Placez cette carte sur votre Pingoléon Actif. Pingoléon LV X peut utiliser n'importe quel (le) attaque, Poké-Power ou Poké-Body de son Niveau précédent.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
