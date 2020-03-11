import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-1",
	localId: 1,

	// Card informations
	name: {
		en: "Deoxys Normal Forme",
		fr: "Deoxys Forme Normale",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/1/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/1/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kent Kanetsuna",

	abilities: [{
		id: 43,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Form Change",
			fr: "Changement de forme",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for any Deoxys and switch it with Deoxys Normal Forme. (Any cards attached to Deoxys Normal Forme, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys Normal Forme on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une autre Deoxys et l'échanger avec Deoxys Forme Normale. (Toutes les cartes qui lui sont attachées, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Deoxys Forme Normale au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Changement de forme par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Energy Crush",
			fr: "Écras'énergie",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
