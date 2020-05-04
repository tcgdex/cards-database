import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-142",
	localId: 142,

	// Card informations
	name: {
		en: "Blaziken FB",
		fr: "Brasegali ",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/142/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/142/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/142/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 862,
		type: AbilityType.POKEBODY,
		name: {
			en: "Burning Spirit",
			fr: "Esprit brûlant",
		},
		text: {
			en: "Any damage done by attacks to a Burned Pokémon (both yours and your opponent's) is increased by 40 (after applying Weakness and Resistance). No more than 40 damage can be added by all Burning Spirit Poké-Bodies.",
			fr: "Tous les dégâts infligés par des attaques à un Pokémon Brûlé (les vôtres et ceux de votre adversaire) sont augmentés de 40 (après application de la Faiblesse et de la Résistance). Les Poké-Bodies Esprit brûlant ne peuvent pas ajouter plus de 40 dégâts.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Jet Shoot",
			fr: "Coup éclair",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Blaziken FB by attacks is increased by 40 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous les dégâts infligés à Brasegali  par des attaques sont augmentés de 40 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
