import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-57",
	localId: 57,

	// Card informations
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 576,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/57/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/57/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/57/high",
		},
	},

	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Doom Decree",
			fr: "Verdict Fatal",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Défenseur est mis K.O.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Black Magic",
			fr: "Magie Noire",
		},
		text: {
			en: "Does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
