import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-24",
	localId: 24,

	// Card informations
	name: {
		en: "Salamence",
		fr: "Salamence",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/24/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/24/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/24/high",
		},
	},

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 1069,
		type: AbilityType.POKEBODY,
		name: {
			en: "Battle Rush",
			fr: "Bataille précipitée",
		},
		text: {
			en: "If your opponent has any Pokémon in play that has maximum HP of 120 or more, ignore all Colorless Energy necessary to use Salamence's attacks.",
			fr: "Si votre adversaire possède des Pokémon en jeu avec un maximum de 120 PV ou plus, ignorez toutes les Énergies Colorless nécessaires pour utiliser les attaques de Drattak.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steam Twister",
			fr: "Tornade vapeur",
		},
		text: {
			en: "Discard a Fire Energy and a Water Energy attached to Salamence.",
			fr: "Défaussez une Énergie Fire et une Énergie Water attachée à Drattak.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
