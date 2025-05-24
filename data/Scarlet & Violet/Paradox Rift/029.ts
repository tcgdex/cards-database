import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Chi-Yu",
		fr: "Yuyu",
		es: "Chi-Yu",
		it: "Chi-Yu",
		pt: "Chi-Yu",
		de: "Yuyu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flare Bringer",
			fr: "Porteur de Flamme",
			es: "Portador de Llamas",
			it: "Portafiamma",
			pt: "Emissário das Chamas",
			de: "Fackelbringer"
		},

		effect: {
			en: "Attach up to 2 Basic {R} Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie {R} de base de votre pile de défausse à l'un de vos Pokémon.",
			es: "Une hasta 2 cartas de Energía {R} Básica de tu pila de descartes a uno de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon fino a due carte Energia base {R} dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia {R} Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			de: "Lege bis zu 2 Basis-{R}-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Megafire of Envy",
			fr: "Jalousie Méga Brûlante",
			es: "Megafuego de Envidia",
			it: "Megafuoco d'Invidia",
			pt: "Megafogo da Inveja",
			de: "Megafeuer des Neids"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 90 danni in più.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Oswaldo KATO"
}

export default card