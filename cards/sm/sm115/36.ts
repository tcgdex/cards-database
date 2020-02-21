import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-36",
	localId: 36,

	// Card informations
	name: {
		en: "Onix-GX",
		fr: "Onix-GX",
	},

	hp: 200,

	type: [
		Type.FIGHTING,
	],

	dexId: 95,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 141,
		name: "PLANETA Igarashi"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Bind",
			fr: "Étreinte",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
		},
		damage: 150
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rocky Avalanche-GX",
			fr: "Avalanche Rocheuse-GX",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance). (You can't use more than 1 GX attack in a game.)",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance). (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
