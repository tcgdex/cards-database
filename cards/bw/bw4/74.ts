import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-74",
	localId: 74,

	// Card informations
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 560,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/74/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/74/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/74/high",
		},
	},

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Rock Head",
			fr: "Tête de Roc",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer Kick",
			fr: "Marto-Pied",
		},
		text: {
			en: "If this Pokémon has fewer remaining HP than the Defending Pokémon, this attack does 30 more damage.",
			fr: "S'il reste moins de PV à ce Pokémon qu'au Pokémon Défenseur, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
