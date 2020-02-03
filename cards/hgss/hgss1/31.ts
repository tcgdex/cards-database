import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-31",
	localId: 31,

	// Card informations
	name: {
		en: "Sunflora",
		fr: "Heliatronc",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 192,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/31/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/31/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/31/high.png",
		},
	},

	evolveFrom: {
		en: "Sunkern",
		fr: "Tournegrin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 870,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sunshine Grace",
			fr: "Grâce solaire",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Sunflora is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Grass dans votre deck, le montrer à votre adversaire et l’ajouter à votre main. Mélangez ensuite votre deck. Ce pouvoir ne peut pas être utilisé si Heliatronc est affecté par un État spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Blade Arms",
			fr: "Bras tranchants",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

