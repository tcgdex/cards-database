import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-203",
	localId: 203,

	// Card informations
	name: {
		en: "Lucario & Melmetal-GX",
		fr: "Lucario et Melmetal-GX",
	},

	hp: 260,

	type: [
		Type.METAL,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/203/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/203/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/203/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/203/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steel Fist",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Search your deck for a Metal Energy card and attach it to this Pokémon. Then, shuffle your deck.",
		},
		damage: 50
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
			fr: "Poing d’Acier",
		},
		text: {
			fr: "Cherchez une carte Énergie Metal dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
		damage: 150
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Full Metal Wall-GX",
			fr: "Gros Impact",
		},
		text: {
			en: "For the rest of this game, your Metal Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance). If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 150
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Mur Métal Plein-GX",
		},
		text: {
			fr: "Pour le reste de cette partie, vos Pokémon Metal subissent 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
