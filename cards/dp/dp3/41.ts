import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-41",
	localId: 41,

	// Card informations
	name: {
		en: "Wormadam Plant Cloak",
		fr: "Cheniselle Cape Plante",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/41/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/41/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/41/high",
		},
	},

	evolveFrom: {
		en: "Burmy Plant Cloak",
		fr: "Cheniti Cape Plante",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 335,
		type: AbilityType.POKEBODY,
		name: {
			en: "Plant Cloak",
			fr: "Cape Plante",
		},
		text: {
			en: "If Wormadam Plant Cloak has 2 or more Grass Energy attached to it, Wormadam Plant Cloak gets +40 HP.",
			fr: "Si Cheniselle Cape Plante possède au moins 2 Énergies Grass, il obtient 40 PV de plus.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Hurricane",
			fr: "Feuille ouragan",
		},
		text: {
			en: "If the Defending Pokémon has fewer remaining HP than Wormadam Plant Cloak, the Defending Pokémon is now Confused.",
			fr: "S'il reste au Pokémon Défenseur moins de PV qu'à Cheniselle Cape Plante, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
