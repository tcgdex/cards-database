import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl3/22/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/22/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/22/high.png",
		},
	},

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



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

