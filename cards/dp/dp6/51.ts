import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-51",
	localId: 51,

	// Card informations
	name: {
		en: "Castform Sunny Form",
		fr: "Morpheo Soleil",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/51/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/51/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Lee HyunJung",

	abilities: [{
		id: 399,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Temperament",
			fr: "Tempérament",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for any Castform and switch it with Castform Sunny Form. (Any cards attached to Castform Sunny Form, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform Sunny Form back into your deck. You can't use more than 1 Temperament Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck n'importe quel Morpheo et l'échanger avec Morpheo Soleil. (Toutes les cartes attachées à Morpheo Soleil, les marqueurs de dégât, États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez alors Morpheo Soleil à votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tempérament par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Ember",
			fr: "Flammèche",
		},
		text: {
			en: "Discard a Fire Energy attached to Castform Sunny Form.",
			fr: "Défaussez une Énergie Fire attachée à Morpheo Soleil.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
