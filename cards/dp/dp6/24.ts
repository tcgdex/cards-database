import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-24",
	localId: 24,

	// Card informations
	name: {
		en: "Deoxys Attack Forme",
		fr: "Deoxys Forme Attaque",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/24/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/24/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/24/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/24/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 43,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Form Change",
			fr: "Changement de forme",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for any Deoxys and switch it with Deoxys Attack Forme. (Any cards attached to Deoxys Attack Forme, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys Attack Forme on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une autre Deoxys et l'échanger avec Deoxys Forme Attaque. (Toutes les cartes qui lui sont attachées, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Deoxys Forme Attaque au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Changement de forme par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Boost",
			fr: "Psycho Boost",
		},
		text: {
			en: "During your next turn, Deoxys's Psychic Boost attack's base damage is 20.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Psycho Boost de Deoxys sont de 20.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

