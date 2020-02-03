import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-124",
	localId: 124,

	// Card informations
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/124/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/124/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/124/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},

	abilities: [{
		id: 632,
		type: AbilityType.TALENT,
		name: {
			en: "Cellular Companions",
			fr: "Compères Cellulaires",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, your Zygarde's and Zygarde-GX's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur votre Banc, les attaques de vos Zygarde et Zygarde-GX infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Boost Fang",
			fr: "Croc Boosté",
		},
		text: {
			en: "Attach a Fighting Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Fighting de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

