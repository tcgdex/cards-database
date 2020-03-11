import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-41",
	localId: 41,

	// Card informations
	name: {
		en: "Glaceon",
		fr: "Givrali Niv. 42",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 471,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/41/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/41/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/41/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 396,
		type: AbilityType.POKEBODY,
		name: {
			en: "Frost Wind",
			fr: "Vent gelant",
		},
		text: {
			en: "As long as Glaceon is your Active Pokémon, any damage done to your Pokémon by your opponent's attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Tant que Givrali est votre Pokémon Actif, tous dégâts infligés à vos Pokémon par des attaques de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Blade",
			fr: "Lame de glace",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Bind",
			fr: "Liens de glace",
		},
		text: {
			en: "If your opponent doesn't discard a card from his or her hand, the Defending Pokémon is now Paralyzed.",
			fr: "Si votre adversaire ne défausse pas de carte de sa main, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
