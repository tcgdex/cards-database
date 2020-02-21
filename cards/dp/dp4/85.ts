import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-85",
	localId: 85,

	// Card informations
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/85/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/85/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/85/high",
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
		id: 892,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sunlight",
			fr: "Rayon solaire",
		},
		text: {
			en: "If you have Lunatone in play, damage done to your opponent's Pokémon by your Psychic or Fighting Pokémon isn't affected by Resistance.",
			fr: "Si vous avez Seleroc en jeu, les dégâts infligés aux Pokémon de votre adversaire par vos Pokémon Psychic ou Fighting ne sont pas affectés par la Résistance.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sol Charge",
			fr: "Recharge solaire",
		},
		text: {
			en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
			fr: "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 de vos Pokémon de Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
