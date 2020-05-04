import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-112",
	localId: 112,

	// Card informations
	name: {
		en: "Latias-EX",
		fr: "Latias-EX",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/112/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/112/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 859,
		type: AbilityType.TALENT,
		name: {
			en: "Bright Down",
			fr: "Bouclier Lumineux",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon with Abilities.",
			fr: "Évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon par les Pokémon de votre adversaire dotés de capacités spéciales.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Barrier Break",
			fr: "Brise Barrière",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
