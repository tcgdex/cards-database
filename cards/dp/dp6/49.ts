import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-49",
	localId: 49,

	// Card informations
	name: {
		en: "Castform Rain Form",
		fr: "Morpheo Pluie",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/49/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/49/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Emi Yoshida",

	abilities: [{
		id: 399,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Temperament",
			fr: "Tempérament",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for any Castform and switch it with Castform Rain Form. (Any cards attached to Castform Rain Form, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform Rain Form back into your deck. You can't use more than 1 Temperament Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck n'importe quel Morpheo et l'échanger avec Morpheo Pluie. (Toutes les cartes attachées à Morpheo Pluie, les marqueurs de dégât, États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez alors Morpheo Pluie à votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tempérament par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
