import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-70",
	localId: 70,

	// Card informations
	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
	},

	hp: 150,

	type: [
		Type.METAL,
	],

	dexId: 411,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/70/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/70/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/70/high",
		},
	},

	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Counter Head",
			fr: "Tête Riposte",
		},
		text: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents au nombre de dégâts infligés à ce Pokémon.",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fortress of Rage",
			fr: "Forteresse de Rage",
		},
		text: {
			en: "This attack does 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts.",
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

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
