import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-48",
	localId: 48,

	// Card informations
	name: {
		en: "Castform",
		fr: "Morpheo",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/48/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/48/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/48/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/48/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},

	abilities: [{
		id: 399,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Temperament",
			fr: "Tempérament",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for any Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Castform on top of your deck. Shuffle your deck afterward. You can't use more than 1 Temperament Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck n'importe quel Morpheo et l'échanger avec Morpheo. (Toutes les cartes attachées à Morpheo, les marqueurs de dégât, États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Morpheo au dessus de votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tempérament par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Weather Ball",
			fr: "Ball'météo",
		},
		text: {
			en: "If you have a Stadium card in play, remove 3 damage counters from Castform. If your opponent has a Stadium card in play, this attack does 30 damage plus 30 more damage.",
			fr: "Si vous avez des cartes Stade en jeu, retirez à Morpheo 3 marqueurs de dégât. Si votre adversaire a des cartes Stade en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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

