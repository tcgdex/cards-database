import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-22",
	localId: 22,

	// Card informations
	name: {
		en: "Claydol",
		fr: "Kaorine",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 344,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/22/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/22/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/22/high",
		},
	},

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Antique Magic",
			fr: "Magie antique",
		},
		text: {
			en: "Put 3 damage counters on any Pokémon (both yours and your opponent's) in any way you like.",
			fr: "Placez 3 marqueurs de dégât sur n'importe quel Pokémon (les vôtres et ceux de votre adversaire) de la façon que vous voulez.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Synchro Attack",
			fr: "Attaque synchro",
		},
		text: {
			en: "If the Defending Pokémon has the same remaining HP as Claydol, this attack's base damage is 90 instead of 30.",
			fr: "Si le Pokémon Défenseur a le même nombre de PV que Kaorine, les dégâts de base de cette attaque sont de 90 au lieu de 30.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
