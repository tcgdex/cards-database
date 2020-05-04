import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-61",
	localId: 61,

	// Card informations
	name: {
		en: "Lunatone",
		fr: "Séléroc",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 337,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hisao Nakamura",

	abilities: [{
		id: 232,
		type: AbilityType.TALENT,
		name: {
			en: "Sol Shade",
			fr: "Sol-Ombre",
		},
		text: {
			en: "If you have Solrock in play, Fire Pokémon in play (both yours and your opponent's) have no Abilities, except Pokémon-GX and Pokémon-EX.",
			fr: "Si vous avez Solaroc en jeu, les Pokémon Fire en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent, à l’exception des Pokémon-GX et des Pokémon-EX.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psyshock",
			fr: "Choc Psy",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
