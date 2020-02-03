import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-3",
	localId: 3,

	// Card informations
	name: {
		en: "Blaziken",
		fr: "Brasegali",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/3/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/3/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/3/high.png",
		},
	},

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 203,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fire Breath",
			fr: "Haleine de feu",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. This power can't be used if Blaziken is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Brûlé. Ce pouvoir ne peut pas être utilisé si Brasegali est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Clutch",
			fr: "Serre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Spin",
			fr: "Danseflamme",
		},
		text: {
			en: "Discard 2 Energy attached to Blaziken.",
			fr: "Défaussez 2 Énergies attachées à Brasegali.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

