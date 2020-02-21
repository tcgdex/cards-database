import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-37",
	localId: 37,

	// Card informations
	name: {
		en: "Meowstic-EX",
		fr: "Mistigrix-EX",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 678,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/37/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/37/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},

	abilities: [{
		id: 1410,
		type: AbilityType.TALENT,
		name: {
			en: "Shadow Ear",
			fr: "Oreill'Ombre",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez déplacer 1 marqueur de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Mind Shock",
			fr: "Choc Cérébral",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
