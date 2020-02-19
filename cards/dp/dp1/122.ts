import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-122",
	localId: 122,

	// Card informations
	name: {
		en: "Torterra",
		fr: "Torterra",
	},

	hp: 160,

	type: [
		Type.GRASS,
	],

	dexId: 389,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/122/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/122/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/122/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/122/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 54,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Forest Murmurs",
			fr: "Murmures de la forêt",
		},
		text: {
			en: "Once during your turn (before your attack), if you have more Prize cards left than your opponent, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. This power can't be used if Torterra is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez plus de cartes Récompense que votre adversaire, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Torterra est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Vigorous Dash",
			fr: "Ruée vigoureuse",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Torterra does 30 damage to itself.",
			fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Torterra s'inflige 30 dégâts.",
		},
		damage: 100
	},{
		name: {
			fr: "Level-Up Rule",
		},
		text: {
			fr: "Placez cette carte sur votre Torterra Actif. Torterra LV X peut utiliser n'importe quel (le) attaque, Poké-Power ou Poké-Body de son Niveau précédent.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

