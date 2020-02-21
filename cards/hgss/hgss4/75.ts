import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
