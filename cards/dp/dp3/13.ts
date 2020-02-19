import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-13",
	localId: 13,

	// Card informations
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/13/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/13/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/13/high.png",
		},
	},

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 264,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rain Dish",
			fr: "Cuvette",
		},
		text: {
			en: "At any time between turns, remove 1 damage counter from Ludicolo.",
			fr: "N'importe quand entre deux tours, retirez à Ludicolo 1 marqueur de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Nature Power",
			fr: "Force-nature",
		},
		text: {
			en: "If you have a Stadium card in play, this attack does 60 damage plus 20 more damage. If your opponent has a Stadium card in play, the Defending Pokémon is now Confused.",
			fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires. Si votre adversaire possède une carte Stade en jeu, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

