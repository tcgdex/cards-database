import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-93",
	localId: 93,

	// Card informations
	name: {
		en: "Giratina-EX",
		fr: "Giratina-EX",
	},

	hp: 170,

	type: [
		Type.DRAGON,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/93/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/93/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 1287,
		type: AbilityType.TALENT,
		name: {
			en: "Renegade Pulse",
			fr: "Onde Renégate",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Mega Evolution Pokémon.",
			fr: "Évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon Méga-Évolution de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chaos Wheel",
			fr: "Roue Chaotique",
		},
		text: {
			en: "Your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from his or her hand during his or her next turn.",
			fr: "Votre adversaire ne peut pas jouer de cartes Outil Pokémon, Énergie spéciale ou Stade de sa main pendant son prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
