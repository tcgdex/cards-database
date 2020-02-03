import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-69",
	localId: 69,

	// Card informations
	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
	},

	hp: 160,

	type: [
		Type.FIGHTING,
	],

	dexId: 697,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/69/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/69/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/69/high.png",
		},
	},

	evolveFrom: {
		en: "Tyrunt",
		fr: "Ptyranidur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 138,
		name: "hatachu"
	},

	abilities: [{
		id: 1145,
		type: AbilityType.TALENT,
		name: {
			en: "Tyrannical Heart",
			fr: "Cœur Tyrannique",
		},
		text: {
			en: "As long as you don't have more Pokémon in play than your opponent, this Pokémon's attacks do 60 more damage (before applying Weakness and Resistance), and it takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Tant que vous n’avez pas plus de Pokémon en jeu que votre adversaire, les attaques de ce Pokémon infligent 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance), et il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
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

