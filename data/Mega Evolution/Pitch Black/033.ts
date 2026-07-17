import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It uses its horn to feed on envy and malice—or so it's said. It's very active at night."
	},

	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		'es-mx': "Shuppet",
		de: "Shuppet"
	},

	illustrator: "Bun Toujo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [353],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hide 'n' Sneak",
			es: "Escondite a Hurtadillas",
			'es-mx': "Escondidas Furtivas"
		},

		effect: {
			en: "Prevent all effects of opponent's Attacks and Abilities done to this Pokémon.",
			es: "Se evitan todos los efectos de los ataques y las habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques y las habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto)."
		}
	}],

	attacks: [{
		name: {
			en: "Hang Down",
			es: "Prender",
			'es-mx': "Colgadera"
		},

		cost: ["Psychic", "Psychic"],

		damage: 10
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
				cardmarket: 895820,
				tcgplayer: 704790
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895820,
				tcgplayer: 704790
			}
		},
	],
}

export default card
