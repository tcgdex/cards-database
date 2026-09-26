import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Shiny particles are released from its wings like a veil. It is said to represent the crescent moon."
	},

	name: {
		en: "Cresselia",
		fr: "Cresselia",
		de: "Cresselia",
		es: "Cresselia",
		it: "Cresselia",
		'es-mx': "Cresselia",
		pt: "Cresselia"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [488],
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Aurora Gain",
			fr: "Puissance Boréale",
			de: "Aurora-Verstärkung",
			es: "Ganar Aurora",
			it: "Prendiaurora",
			'es-mx': "Ganancia Aurora",
			pt: "Aurora"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			en: "Lunar Blast",
			fr: "Explosion Lunaire",
			de: "Mondsturm",
			es: "Explosión Lunar",
			it: "Furia Lunare",
			'es-mx': "Explosión Lunar",
			pt: "Detonação Lunar"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907681,
				tcgplayer: 716470
			}
		}
	],
}

export default card
