import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-19",
	localId: 19,

	// Card informations
	name: {
		en: "Suicune",
		fr: "Suicune",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 245,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/19/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/19/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/19/high.png",
		},
	},

	evolveFrom: {
		fr: "Suicune",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 320,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Aqua Recovery",
			fr: "Guérison aquatique",
		},
		text: {
			en: "Once during your turn, when you put Suicune from your hand onto your Bench, you may search your discard pile for up to 3 Water Pokémon, show them to your opponent, and put them into your hand.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Suicune de votre main sur votre Banc, vous pouvez choisir dans votre pile de défausse jusqu'à 3 Pokémon Water. Montrez-les à votre adversaire et placez-les dans votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Cure Stream",
			fr: "Ruisseau guérisseur",
		},
		text: {
			en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés au Pokémon Défenseur par des attaques sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

