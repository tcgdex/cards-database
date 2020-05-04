import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-98",
	localId: 98,

	// Card informations
	name: {
		en: "Machamp",
		fr: "Machamp LV.X",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/98/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/98/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/98/high",
		},
	},

	evolveFrom: {
		fr: "Mackogneur LV.X",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 589,
		type: AbilityType.POKEBODY,
		name: {
			en: "No Guard",
			fr: "Annule garde",
		},
		text: {
			en: "As long as Machamp is your Active Pokémon, each of Machamp's attacks does 60 more damage to the Active Pokémon (before applying Weakness and Resistance) and any damage done to Machamp by your opponent's Pokémon is increased by 60 (after applying Weakness and Resistance).",
			fr: "Tant que Mackogneur est votre Pokémon Actif, chacune des attaques de Mackogneur inflige 60 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance) et tous dégâts infligés à Mackogneur par des Pokémon de votre adversaire sont augmentés de 60 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strong-Willed",
			fr: "Têtu",
		},
		text: {
			en: "During your opponent's next turn, if Machamp would be Knocked Out by damage from an attack, flip a coin. If heads, Machamp is not Knocked Out and its remaining HP becomes 10 instead.",
			fr: "Lors du prochain tour de votre adversaire, si Mackogneur est mis K.O par des dégâts d'une attaque, lancez une pièce. Si c'est face, Mackogneur n'est pas mis K.O et il lui reste 10 PV.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+40"
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
