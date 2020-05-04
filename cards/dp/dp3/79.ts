import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-79",
	localId: 79,

	// Card informations
	name: {
		en: "Burmy Sandy Cloak",
		fr: "Cheniti Cape Sable",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 412,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/79/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/79/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 358,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Wear Cloak",
			fr: "Cape",
		},
		text: {
			en: "Once during your turn (before your attack), if Burmy Sandy Cloak is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Burmy Sandy Cloak.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Sable est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base Fighting et l'attacher à Cheniti Cape Sable.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sandy Cloak Tackle",
			fr: "Charge cape sable",
		},
		text: {
			en: "If Burmy Sandy Cloak has any Fighting Energy attached to it, this attack does 10 damage plus 10 more damage.",
			fr: "Si Cheniti Cape Sable possède de l'Énergie Fighting, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
