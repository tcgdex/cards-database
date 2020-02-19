import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-27",
	localId: 27,

	// Card informations
	name: {
		en: "Staraptor",
		fr: "Staraptor",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 398,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/27/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/27/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/27/high.png",
		},
	},

	evolveFrom: {
		en: "Staravia",
		fr: "Etourvol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 573,
		type: AbilityType.POKEBODY,
		name: {
			en: "Protect Wing",
			fr: "Aile protectrice",
		},
		text: {
			en: "As long as Staraptor is your Active Pokémon, any damage done by attacks from your opponent's Stage 2 Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tant qu'Etouraptor est votre Pokémon Actif, tous dégâts infligés par des attaques de Pokémon Évolués de Niveau 2 de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Strong Breeze",
			fr: "Forte brise",
		},
		text: {
			en: "Flip a coin. If heads, put 1 of your opponent's Benched Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
			fr: "Lancez une pièce. Si c'est face, placez 1 des Pokémon de Banc de votre adversaire ainsi que toutes les cartes qui lui sont attachées au dessus de son deck. Ensuite, votre adversaire mélange son deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Clutch",
			fr: "Serre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon  Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

