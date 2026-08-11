import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'de-de': "Skelabra",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'es-es': "Chandelure",
		'es-mx': "Chandelure"
	},

	illustrator: "Kuroimori",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'de-de': "Laternecto",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'es-es': "Lampent",
		'es-mx': "Lampent"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Incendiary Pillar",
			'fr-fr': "Colonne Incendiaire",
			'de-de': "Zündende Säule",
			'it-it': "Colonna Incendiaria",
			'pt-br': "Pilastra Incendiária",
			'es-es': "Pila Incendiaria",
			'es-mx': "Pilar Incendiario"
		},

		effect: {
			'en-us': "If you have 10 or more Basic {R} Energy cards in your discard pile, this attack does 100 more damage.",
			'fr-fr': "Si vous avez 10 cartes Énergie {R} de base ou plus dans votre pile de défausse, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wenn du 10 oder mehr Basis-{R}-Energiekarten in deinem Ablagestapel hast, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se hai 10 o più carte Energia base {R} nella tua pila degli scarti, questo attacco infligge 100 danni in più.",
			'pt-br': "Se você tiver 10 ou mais cartas de Energia {R} Básica na sua pilha de descarte, este ataque causará 100 pontos de dano a mais.",
			'es-es': "Si tienes 10 cartas de Energía {R} Básica o más en tu pila de descartes, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si tienes 10 cartas de Energía {R} Básica o más en tu pila de descartes, este ataque hace 100 puntos de daño más."
		},

		damage: "50+"
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Burn It All Up",
			'fr-fr': "Combustion Totale",
			'de-de': "Alles abbrennen",
			'it-it': "Fiamma Estrema",
			'pt-br': "Queimar Tudo",
			'es-es': "Carbonizar",
			'es-mx': "Combustión Total"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836099,
				tcgplayer: 642551
			}
		},
	],
}

export default card
