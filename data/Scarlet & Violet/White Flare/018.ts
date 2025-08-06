import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		de: "Skelabra",
		it: "Chandelure",
		pt: "Chandelure",
		es: "Chandelure",
		'es-mx': "Chandelure"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Incendiary Pillar",
			fr: "Colonne Incendiaire",
			de: "Zündende Säule",
			it: "Colonna Incendiaria",
			pt: "Pilastra Incendiária",
			es: "Pila Incendiaria",
			'es-mx': "Pilar Incendiario"
		},

		effect: {
			en: "If you have 10 or more Basic {R} Energy cards in your discard pile, this attack does 100 more damage.",
			fr: "Si vous avez 10 cartes Énergie {R} de base ou plus dans votre pile de défausse, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn du 10 oder mehr Basis-{R}-Energiekarten in deinem Ablagestapel hast, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se hai 10 o più carte Energia base {R} nella tua pila degli scarti, questo attacco infligge 100 danni in più.",
			pt: "Se você tiver 10 ou mais cartas de Energia {R} Básica na sua pilha de descarte, este ataque causará 100 pontos de dano a mais.",
			es: "Si tienes 10 cartas de Energía {R} Básica o más en tu pila de descartes, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si tienes 10 cartas de Energía {R} Básica o más en tu pila de descartes, este ataque hace 100 puntos de daño más."
		},

		damage: "50+"
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Burn It All Up",
			fr: "Combustion Totale",
			de: "Alles abbrennen",
			it: "Fiamma Estrema",
			pt: "Queimar Tudo",
			es: "Carbonizar",
			'es-mx': "Combustión Total"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835935
	}
}

export default card