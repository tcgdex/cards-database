import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'es-mx': "Shuppet",
		'de-de': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet"
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
			'en-us': "Hide 'n' Sneak",
			'fr-fr': "Cachette en Douce",
			'es-es': "Escondite a Hurtadillas",
			'es-mx': "Escondidas Furtivas",
			'de-de': "Listiges Versteckspiel",
			'it-it': "Nascondino Furbino",
			'pt-br': "Esconde-some"
		},

		effect: {
			'en-us': "Prevent all effects of your opponent's Pokémon's attacks and Abilities done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets des attaques et des talents des Pokémon de votre adversaire infligés à ce Pokémon. (Les dégâts ne sont pas un effet.)",
			'es-es': "Se evitan todos los efectos de los ataques y las habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques y las Habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'de-de': "Verhindere alle Effekte von Attacken und Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)",
			'it-it': "Previeni tutti gli effetti degli attacchi e delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques e Habilidades dos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)"
		}
	}],

	attacks: [{
		name: {
			'en-us': "Hang Down",
			'fr-fr': "Suspension",
			'es-es': "Prender",
			'es-mx': "Colgadera",
			'de-de': "Herunterhängen",
			'it-it': "Tirar Giù",
			'pt-br': "Dependurar"
		},

		cost: ["Psychic"],

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
