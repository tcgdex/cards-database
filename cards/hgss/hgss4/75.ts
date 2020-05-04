import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-75",
	localId: 75,

	// Card informations
	name: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 353,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/75/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/75/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Disable",
			fr: "Entrave",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, choisissez l'une des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Haunt",
			fr: "Hanter",
		},
		text: {
			en: "Put 1 damage counter on the Defending Pokémon.",
			fr: "Placez un marqueur de dégât sur le Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
