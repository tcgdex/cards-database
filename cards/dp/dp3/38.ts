import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-38",
	localId: 38,

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
			en: "https://assets.tcgdex.net/en/dp/dp3/38/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/38/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/38/high.png",
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
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 887,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Grass Whistle",
			fr: "Sifflet herbe",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Grass Pokémon. You can't use more than 1 Grass Whistle Poké-Power each turn. This power can't be used if Sunflora is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer 1 marqueur de dégât à chacun de vos Pokémon Grass. Vous ne pouvez pas utiliser plus d'1 Poké-Power Sifflet herbe par tour. Ce pouvoir ne peut pas être utilisé si Heliatronc est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Petal Dance",
			fr: "Danse-fleur",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads. If you get 2 or more heads, Sunflora is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Si vous obtenez 2 faces ou plus, Heliatronc est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

