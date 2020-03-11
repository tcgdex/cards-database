import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW19",
	localId: "BW19",

	// Card informations
	name: {
		en: "Zoroark",
		fr: "Zoroark",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 571,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW19/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW19/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW19/high",
		},
	},

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Punishment",
			fr: "Punition",
		},
		text: {
			en: "If the Defending Pokémon is a Stage 2 Pokémon, this attack does 20 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon de Niveau 2, cette attaque inflige 20 dégâts supplémentaires",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Snarl",
			fr: "Aboiement",
		},
		text: {
			en: "During your opponent's next turn, damage from the Defending Pokémon attacks is reduced by 20.",
			fr: "Pendant le prochain tour de votre adversaire, les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 20.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
