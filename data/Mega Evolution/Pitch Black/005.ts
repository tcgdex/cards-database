import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Poltchageist looks like a regional form of Sinistea, but it was recently discovered that the two Pokémon are entirely unrelated.",
		de: "Es sieht aus wie eine Regionalform von Fatalitee, doch vor Kurzem fand man heraus, dass zwischen den beiden Pokémon keine Verbindung besteht."
	},

	name: {
		en: "Poltchageist",
		fr: "Poltchageist",
		es: "Poltchageist",
		'es-mx': "Poltchageist",
		de: "Mortcha"
	},

	illustrator: "Mousho",
	rarity: "Common",
	category: "Pokemon",
	dexId: [1012],
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

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
			en: "Furitive Drop",
			es: "Caída Furtiva",
			'es-mx': "Caída Furtiva",
			de: "Hinterhältiger Fall"
		},

		cost: ["Colorless"],

		effect: {
			en: "Put 1 damage counter on your opponent's Active Pokémon",
			es: "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
			'es-mx': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
			de: "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895793,
				tcgplayer: 704762
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895793,
				tcgplayer: 704762
			}
		},
	],
}

export default card
