import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-31",
	localId: 31,

	// Card informations
	name: {
		en: "Volcanion ◇",
		fr: "Volcanion ",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 721,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/31/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/31/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/31/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 1206,
		type: AbilityType.TALENT,
		name: {
			en: "Jet Geyser",
			fr: "Propulsion Geyser",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Water Energy card from your hand. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Water de votre main. Dans ce cas, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Sauna Blast",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 100
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			fr: "Sauna Explosif",
		},
		text: {
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

