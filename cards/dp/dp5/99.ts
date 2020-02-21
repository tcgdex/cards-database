import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-99",
	localId: 99,

	// Card informations
	name: {
		en: "Leafeon",
		fr: "Phyllali",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 470,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/99/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/99/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 596,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Forcing",
			fr: "Énergie forcing",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach an Energy card from your hand to 1 of your Pokémon. This power can't be used if Leafeon is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de votre main à 1 de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Phyllali est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Verdant Dance",
			fr: "Danse verdoyante",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Energy attached to all of your Pokémon.",
			fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
