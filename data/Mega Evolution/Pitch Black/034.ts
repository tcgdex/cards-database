import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "A doll bore a grudge over being junked, and it became a Pokémon. It seeks the child that disowned it.",
		de: "Der Groll darüber, weggeworfen worden zu sein, machte aus einer Plüschpuppe dieses Pokémon. Es sucht das Kind, von dem es verstoßen wurde."
	},

	name: {
		en: "Banette",
		fr: "Branette",
		es: "Banette",
		'es-mx': "Banette",
		de: "Banette"
	},

	illustrator: "Mugi Hamada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [354],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Shuppet"
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
			en: "Puppet Pull",
			es: "Tirón del Títere",
			'es-mx': "Hallazgo del Títere",
			de: "Marionettenzieher"
		},

		cost: ["Psychic", "Psychic"],

		damage: 80,

		effect: {
			en: "You may search your deck for a card and put it into your hand. Then shuffle tour deck.",
			es: "Puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Puedes buscar en tu mazo 1 carta y ponerla en tu mano. Después, baraja tu mazo.",
			de: "Du kannst dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		}
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
			thirdParty: {
				cardmarket: 895821,
				tcgplayer: 704791
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895821,
				tcgplayer: 704791
			}
		},
	],
}

export default card
