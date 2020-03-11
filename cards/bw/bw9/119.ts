import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-119",
	localId: 119,

	// Card informations
	name: {
		en: "Garbodor",
		fr: "Miasmax",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 569,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/119/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/119/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/119/high",
		},
	},

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ayaka Yoshida",

	abilities: [{
		id: 462,
		type: AbilityType.TALENT,
		name: {
			en: "Garbotoxin",
			fr: "Miasmotoxine",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Garbotoxin).",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de capacité spéciale (à part Miasmotoxine).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Toss",
			fr: "Giclée Vaseuse",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
