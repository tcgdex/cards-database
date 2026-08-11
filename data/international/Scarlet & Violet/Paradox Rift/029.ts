import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [1004],
	set: Set,

	name: {
		'en-us': "Chi-Yu",
		'fr-fr': "Yuyu",
		'es-es': "Chi-Yu",
		'it-it': "Chi-Yu",
		'pt-br': "Chi-Yu",
		'de-de': "Yuyu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Flare Bringer",
			'fr-fr': "Porteur de Flamme",
			'es-es': "Portador de Llamas",
			'it-it': "Portafiamma",
			'pt-br': "Emissário das Chamas",
			'de-de': "Fackelbringer"
		},

		effect: {
			'en-us': "Attach up to 2 Basic {R} Energy cards from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {R} de base de votre pile de défausse à l'un de vos Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía {R} Básica de tu pila de descartes a uno de tus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon fino a due carte Energia base {R} dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia {R} Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			'de-de': "Lege bis zu 2 Basis-{R}-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Megafire of Envy",
			'fr-fr': "Jalousie Méga Brûlante",
			'es-es': "Megafuego de Envidia",
			'it-it': "Megafuoco d'Invidia",
			'pt-br': "Megafogo da Inveja",
			'de-de': "Megafeuer des Neids"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 90 danni in più.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It controls flames burning at over 5,400 degrees Fahrenheit. It casually swims through the sea of lava it creates by melting rock and sand.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740505,
				tcgplayer: 523638,
				cardtrader: 265051
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740505,
				tcgplayer: 523638,
				cardtrader: 265051
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
