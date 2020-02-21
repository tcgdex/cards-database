import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-151",
	localId: 151,

	// Card informations
	name: {
		en: "Terrakion",
		fr: "Terrakium",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 639,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/151/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/151/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/151/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Retaliate",
			fr: "Vengeance",
		},
		text: {
			en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 60 more damage.",
			fr: "Si l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
