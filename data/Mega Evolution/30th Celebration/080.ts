import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Known as the Beast That Calls the Moon, this Pokémon lives by taking in any and all light and converting it into its own energy."
	},

	name: {
		en: "Lunala",
		fr: "Lunala",
		de: "Lunala",
		es: "Lunala",
		it: "Lunala",
		'es-mx': "Lunala"
	},

	illustrator: "Bun Toujo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [792],
	hp: 160,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Midnight Ray",
			fr: "Rayon de Minuit",
			de: "Mitternachtsstrahl",
			es: "Rayo de Medianoche",
			it: "Raggio della Notte",
			'es-mx': "Rayo de Medianoche"
		},

		effect: {
			en: "This attack does 20 more damage for each Energy card in your discard pile.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie dans votre pile de défausse.",
			de: "Diese Attacke fügt für jede Energiekarte in deinem Ablagestapel 20 Schadenspunkte mehr zu.",
			es: "Este ataque hace 20 puntos de daño más por cada carta de Energía en tu pila de descartes.",
			it: "Questo attacco infligge 20 danni in più per ogni carta Energia nella tua pila degli scarti.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada carta de Energía en tu pila de descartes."
		},

		damage: "20+",
		cost: ["Psychic"]
	}, {
		name: {
			en: "Lunar Blast",
			fr: "Explosion Lunaire",
			de: "Mondsturm",
			es: "Explosión Lunar",
			it: "Furia Lunare",
			'es-mx': "Explosión Lunar"
		},

		damage: 120,
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

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907687,
				tcgplayer: 716476
			}
		}
	],
}

export default card
