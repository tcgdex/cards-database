import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-78",
	localId: 78,

	// Card informations
	name: {
		en: "Burmy Plant Cloak",
		fr: "Cheniti Cape Plante",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 412,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/78/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/78/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/78/high",
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
		id: 358,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Wear Cloak",
			fr: "Cape",
		},
		text: {
			en: "Once during your turn (before your attack), if Burmy Plant Cloak is your Active Pokémon, you may search your discard pile for a basic Grass Energy card and attach it to Burmy Plant Cloak.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Plante est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base Grass et l'attacher à Cheniti Cape Plante.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Plant Cloak Tackle",
			fr: "Charge cape plante",
		},
		text: {
			en: "If Burmy Plant Cloak has any Grass Energy attached to it, this attack does 10 damage plus 10 more damage.",
			fr: "Si Cheniti Cape Plante possède de l'Énergie Grass, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
