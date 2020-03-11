import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-57",
	localId: 57,

	// Card informations
	name: {
		en: "Unown G",
		fr: "Zarbi G",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/57/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/57/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/57/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Daisuke Ito",

	abilities: [{
		id: 453,
		type: AbilityType.POKEPOWER,
		name: {
			en: "GUARD",
			fr: "GARDIEN",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown G is on your Bench, you may discard all cards attached to Unown G and attach Unown G to 1 of your Pokémon as a Pokémon Tool card. As long as Unown G is attached to a Pokémon, prevent all effects of attacks, excluding damage, done to that Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi G est sur votre Banc, vous pouvez défausser toutes les cartes qui lui sont attachées et attacher Zarbi G à 1 de vos Pokémon comme carte Outil Pokémon. Tant que Zarbi G est attachée à 1 Pokémon, prévenez tous les effets d'attaques, dégâts exclus, infligés à ce Pokémon par des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "If Unown G has any damage counters on it, this attack's base damage is 10.",
			fr: "Si Zarbi G possède des marqueurs de dégât, les dégâts de base de cette attaque sont de 10.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
