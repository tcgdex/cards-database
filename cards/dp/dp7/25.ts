import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-25",
	localId: 25,

	// Card informations
	name: {
		en: "Scizor",
		fr: "Scizor",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/25/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/25/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/25/high",
		},
	},

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 1070,
		type: AbilityType.POKEBODY,
		name: {
			en: "Honeycomb Defender",
			fr: "Défenseur de nid d'abeille",
		},
		text: {
			en: "If Scizor has 6 or more damage counters on it, any damage done to Scizor by attacks is reduced by 40 (after applying Weakness and Resistance).",
			fr: "Si Cizayox possède au moins 6 marqueurs de dégât, tous dégâts infligés à Cizayox par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Accelerate",
			fr: "Accélérer",
		},
		text: {
			en: "If the Defending Pokémon is Knocked Out by this attack, prevent all effects of an attack, including damage, done to Scizor during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Cizayox lors du prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Pound Down",
			fr: "Mettre en bouillie",
		},
		text: {
			en: "If you don't have any Pokémon with any Poké-Powers in play, this attack does 40 damage plus 30 more damage.",
			fr: "Si vous n'avez pas de Pokémon possédant des Poké-Powers en jeu, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
