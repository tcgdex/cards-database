import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-1",
	localId: 1,

	// Card informations
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/1/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/1/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/1/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 359,
		type: AbilityType.POKEBODY,
		name: {
			en: "Damage Bind",
			fr: "Attache-dégâts",
		},
		text: {
			en: "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
			fr: "Chaque Pokémon possédant des marqueurs de dégâts (les vôtres et ceux de votre adversaire) ne peut pas utiliser de Poké-Powers.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Gigavolt",
			fr: "Gigavolt",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Si c'est pile, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reflect Energy",
			fr: "Renvoi d'énergie",
		},
		text: {
			en: "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon.",
			fr: "Déplacez une carte Énergie attachée à Pharamp sur 1 des Pokémon de votre Banc.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
