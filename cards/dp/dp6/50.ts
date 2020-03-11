import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-50",
	localId: 50,

	// Card informations
	name: {
		en: "Castform Snow-cloud Form",
		fr: "Morpheo Neige",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/50/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/50/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Saya Tsuruta",

	abilities: [{
		id: 399,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Temperament",
			fr: "Tempérament",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for any Castform and switch it with Castform Snow-cloud Form. (Any cards attached to Castform Snow-cloud Form, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform Snow-cloud Form back into your deck. You can't use more than 1 Temperament Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck n'importe quel Morpheo et l'échanger avec Morpheo Neige. (Toutes les cartes attachées à Morpheo Neige, les marqueurs de dégât, États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez alors Morpheo Neige à votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tempérament par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hail",
			fr: "Grêle",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
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
