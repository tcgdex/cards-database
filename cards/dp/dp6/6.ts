import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-6",
	localId: 6,

	// Card informations
	name: {
		en: "Heatran",
		fr: "Heatran",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/6/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/6/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/6/high.png",
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
		id: 582,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Flash Fire",
			fr: "Torche",
		},
		text: {
			en: "Once during your turn (before your attack), you may move a Fire Energy attached to 1 of your Pokémon to Heatran. This power can't be used if Heatran is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer sur Heatran une Énergie Fire attachée à 1 de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Heatran est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magma Storm",
			fr: "Vortex Magma",
		},
		text: {
			en: "You may discard as many basic Energy cards as you like attached to Heatran. If you do, this attack does 40 damage plus 20 more damage for each Energy card you discarded.",
			fr: "Vous pouvez défausser autant de cartes Énergie de base attachées à Heatran que vous le voulez. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires pour chaque Énergie défaussée.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

