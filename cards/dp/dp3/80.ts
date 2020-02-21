import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-80",
	localId: 80,

	// Card informations
	name: {
		en: "Burmy Trash Cloak",
		fr: "Cheniti Cape Déchet",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 412,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/80/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/80/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 358,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Wear Cloak",
			fr: "Cape",
		},
		text: {
			en: "Once during your turn (before your attack), if Burmy Trash Cloak is your Active Pokémon, you may search your discard pile for a basic Metal Energy card and attach it to Burmy Trash Cloak.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Déchet est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base Metal et l'attacher à Cheniti Cape Déchet.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Trash Cloak Tackle",
			fr: "Charge cape déchet",
		},
		text: {
			en: "If Burmy Trash Cloak has any Metal Energy attached to it, this attack does 10 damage plus 10 more damage.",
			fr: "Si Cheniti Cape Déchet possède de l'Énergie Metal, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
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
