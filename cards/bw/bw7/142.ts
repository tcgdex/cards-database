import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-142",
	localId: 142,

	// Card informations
	name: {
		en: "Keldeo-EX",
		fr: "Keldeo-EX",
	},

	hp: 170,

	type: [
		Type.WATER,
	],

	dexId: 647,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/142/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/142/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/142/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 405,
		type: AbilityType.TALENT,
		name: {
			en: "Rush In",
			fr: "Intervention",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch this Pokémon with your Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez échanger ce Pokémon avec votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Secret Sword",
			fr: "Lame Ointe",
		},
		text: {
			en: "Does 20 more damage for each Water Energy attached to this Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
