import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-205",
	localId: 205,

	// Card informations
	name: {
		en: "Gardevoir & Sylveon-GX",
		fr: "Gardevoir et Nymphali-GX",
	},

	hp: 260,

	type: [
		Type.FAIRY,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/205/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/205/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/205/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/205/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fairy Song",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Search your deck for up to 2 Fairy Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Kaleidostorm",
			fr: "Chant Féérique",
		},
		text: {
			en: "Move any number of Energy from your Pokémon to your other Pokémon in any way you like.",
			fr: "Cherchez jusqu’à 2 cartes Énergie Fairy dans votre deck et attachez-les à vos Pokémon de Banc, de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
		damage: 150
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Magical Miracle-GX",
			fr: "Kaléidouragan",
		},
		text: {
			en: "If this Pokémon has at least 3 extra Fairy Energy attached to it (in addition to this attack's cost), your opponent shuffles their hand into their deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez vers vos autres Pokémon, de la manière que vous voulez.",
		},
		damage: 200
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			fr: "Miracle Magique-GX",
		},
		text: {
			fr: "Si au moins 3 Énergies Fairy supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), votre adversaire mélange sa main avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
