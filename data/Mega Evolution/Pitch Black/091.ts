import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		es: "Dhelmise",
		'es-mx': "Dhelmise",
		de: "Moruda",
		it: "Dhelmise",
		pt: "Dhelmise"
	},

	illustrator: "Nakamura Ippan",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [781],
	hp: 140,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Vengeful Anchor",
			fr: "Ancre Vengeresse",
			es: "Ancla Vengativa",
			'es-mx': "Ancla Vengativa",
			de: "Verankerte Rache",
			it: "Ancora Vendicativa",
			pt: "Âncora Vingativa"
		},

		cost: ["Psychic"],

		damage: "30+",

		effect: {
			en: "If you have 4 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, this attack does 140 more damage.",
			fr: "Si vous avez au moins 4 Pokémon ayant le talent Cachette en Douce dans votre pile de défausse, cette attaque inflige 140 dégâts supplémentaires.",
			es: "Si tienes en tu pila de descartes 4 Pokémon o más que tengan la habilidad Escondite a Hurtadillas, este ataque hace 140 puntos de daño más.",
			'es-mx': "Si tienes 4 Pokémon o más que tengan la Habilidad Escondidas Furtivas en tu pila de descartes, este ataque hace 140 puntos de daño más.",
			de: "Wenn du 4 oder mehr Pokémon, die die Fähigkeit Listiges Versteckspiel haben, in deinem Ablagestapel hast, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			it: "Se hai quattro o più Pokémon che hanno l'abilità Nascondino Furbino nella tua pila degli scarti, questo attacco infligge 140 danni in più.",
			pt: "Se você tiver 4 ou mais Pokémon que têm a Habilidade Esconde-some na sua pilha de descarte, este ataque causará 140 pontos de dano a mais."
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

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895875,
				tcgplayer: 704848
			}
		},
	],
}

export default card
