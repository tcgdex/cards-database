import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It prefers cool, dark places, such as the back of a shelf or the space beneath a home's floorboards. It wanders in search of prey after sunset.",
		de: "Es hält sich gern an dunklen und kalten Orten auf wie etwa unter Fußböden oder hinter Regalen. Nach Sonnenuntergang geht es auf Beutejagd."
	},

	name: {
		en: "Sinistcha",
		fr: "Théffroyable",
		es: "Sinistcha",
		'es-mx': "Sinistcha",
		de: "Fatalitcha"
	},

	illustrator: "mingo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1013],
	hp: 60,
	types: ["Grass"],

	evolveFrom: {
		en: "Poltchageist"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hide 'n' Sneak",
			es: "Escondite a Hurtadillas",
			'es-mx': "Escondidas Furtivas",
			de: "Listiges Versteckspiel"
		},

		effect: {
			en: "Prevent all effects of opponent's Attacks and Abilities done to this Pokémon.",
			es: "Se evitan todos los efectos de los ataques y las habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques y las habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			de: "Verhindere alle Effekte von Attacken und Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		name: {
			en: "Matcha Spin",
			es: "Giro Matcha",
			'es-mx': "Giro de Matcha",
			de: "Matchawirbel"
		},

		cost: ["Colorless"],

		effect: {
			en: "If you have 6 or more Pokémon with the Hide 'n' Sneak Ability in your discard pile, put 4 damage counters on each of your opponent's Pokémon.",
			es: "Si tienes en tu pila de descartes 6 Pokémon o más que tengan la habilidad Escondite a Hurtadillas, pon 4 contadores de daño en cada uno de los Pokémon de tu rival.",
			'es-mx': "Si tienes en tu pila de descartes 6 Pokémon o más que tengan la habilidad Escondidas Furtivas, pon 4 contadores de daño en cada uno de los Pokémon de tu rival.",
			de: "Wenn du 6 oder mehr Pokémon, die die Fähigkeit Listiges Versteckspiel haben, in deinem Ablagestapel hast, lege 4 Schadensmarken auf jedes Pokémon deines Gegners."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895794,
				tcgplayer: 704763
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895794,
				tcgplayer: 704763
			}
		},
	],
}

export default card
