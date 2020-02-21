import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-23",
	localId: 23,

	// Card informations
	name: {
		en: "Glaceon",
		fr: "Givrali",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 471,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/23/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/23/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/23/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 968,
		type: AbilityType.TALENT,
		name: {
			en: "Freeze Zone",
			fr: "Zone de Gel",
		},
		text: {
			en: "The Retreat Cost of each of your Team Plasma Pokémon in play is ColorlessColorless less.",
			fr: "Le coût de Retraite de chacun de vos Pokémon de la Team Plasma en jeu est diminué de ColorlessColorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Icy Wind",
			fr: "Vent Glace",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
