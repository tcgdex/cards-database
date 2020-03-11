import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-94",
	localId: 94,

	// Card informations
	name: {
		en: "Scizor",
		fr: "Cizayox",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/94/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/94/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/94/high",
		},
	},

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hiroki Asanuma",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steel Slash",
			fr: "Tranche Acier",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon-EX.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-EX.",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
		},
		text: {
			en: "This Pokémon can't use Slashing Strike during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
