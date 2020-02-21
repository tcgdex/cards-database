import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-2",
	localId: 2,

	// Card informations
	name: {
		en: "Espeon",
		fr: "Mentali",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/2/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/2/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/2/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Solar Suggestion",
			fr: "Suggestion solaire",
		},
		text: {
			en: "Move up to 4 damage counters from any of your Pokémon to any of your opponent's Pokémon in any way you like.",
			fr: "Retirez jusqu'à 4 marqueurs de dégât à vos Pokémon et placez-les comme vous le voulez sur les Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psybeam",
			fr: "Rafale psy",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
