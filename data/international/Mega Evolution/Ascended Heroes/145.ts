import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Registeel ex",
		'fr-fr': "Registeel-ex",
		'es-es': "Registeel ex",
		'es-mx': "Registeel ex",
		'de-de': "Registeel-ex",
		'it-it': "Registeel-ex",
		'pt-br': "Registeel ex"
	},

	suffix: "ex",
	illustrator: "toriyufu",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [379],
	hp: 230,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Regi Charge",
			'fr-fr': "Regi-Charge",
			'es-es': "Regi Carga",
			'es-mx': "Regicarga",
			'de-de': "Regi-Ladung",
			'it-it': "Carica Regi",
			'pt-br': "Carga Regi"
		},

		effect: {
			'en-us': "Attach up to 2 Basic {M} Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {M} de base de votre pile de défausse à ce Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía {M} Básica de tu pila de descartes a este Pokémon.",
			'es-mx': "Une hasta 2 cartas de Energía {M} Básica de tu pila de descartes a este Pokémon.",
			'de-de': "Lege bis zu 2 Basis-{M}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an.",
			'it-it': "Assegna a questo Pokémon fino a due carte Energia base {M} dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia {M} Básica da sua pilha de descarte a este Pokémon."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Protecting Steel",
			'fr-fr': "Acier Protecteur",
			'es-es': "Acero Protector",
			'es-mx': "Acero Protector",
			'de-de': "Schützender Stahl",
			'it-it': "Acciaio Protettivo",
			'pt-br': "Protegidaço"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 50 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869756,
				tcgplayer: 675957
			}
		}
	],
}

export default card
