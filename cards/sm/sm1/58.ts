import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-58",
	localId: 58,

	// Card informations
	name: {
		en: "Alolan Muk",
		fr: "Grotadmorv d’Alola",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/58/high",
		},
	},

	evolveFrom: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hitoshi Ariga",

	abilities: [{
		id: 497,
		type: AbilityType.TALENT,
		name: {
			en: "Power of Alchemy",
			fr: "Osmose",
		},
		text: {
			en: "Each Basic Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities.",
			fr: "Aucun Pokémon de base en jeu, dans la main de chaque joueur et dans leur pile de défausse, n’a de talent.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
