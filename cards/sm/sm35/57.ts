import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-57",
	localId: 57,

	// Card informations
	name: {
		en: "Shining Arceus",
		fr: "Arceus Brillant",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/57/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/57/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/57/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/57/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1216,
		type: AbilityType.TALENT,
		name: {
			en: "Fabled Defense",
			fr: "Défense de Légende",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, prevent all damage done to your Benched Pokémon by your opponent's attacks.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ultimate Arrow",
			fr: "Flèche Ultime",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

