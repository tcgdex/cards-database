import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eternatus",
		'fr-fr': "Éthernatos",
		'es-es': "Eternatus",
		'es-mx': "Eternatus",
		'de-de': "Endynalos",
		'it-it': "Eternatus",
		'pt-br': "Eternatus"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [890],
	hp: 150,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Shatter",
			'fr-fr': "Fracas",
			'es-es': "Fragmentar",
			'es-mx': "Fragmentar",
			'de-de': "Zertrümmern",
			'it-it': "Frantumare",
			'pt-br': "Estilhaçar"
		},

		effect: {
			'en-us': "Discard a Stadium in play.",
			'fr-fr': "Défaussez un Stade en jeu.",
			'es-es': "Descarta 1 Estadio en juego.",
			'es-mx': "Descarta 1 Estadio en juego.",
			'de-de': "Lege 1 Stadion im Spiel auf den Ablagestapel.",
			'it-it': "Scarta una carta Stadio in gioco.",
			'pt-br': "Descarte um Estádio em jogo."
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Power Rush",
			'fr-fr': "Ruée Puissante",
			'es-es': "Envite Poderoso",
			'es-mx': "Embestida Poderosa",
			'de-de': "Power-Ansturm",
			'it-it': "Assalto Potente",
			'pt-br': "Arremetida Poderosa"
		},

		effect: {
			'en-us': "Flip a coin. If tails, during your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon no puede usar ataques durante tu próximo turno.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, durante tu próximo turno, este Pokémon no puede usar ataques.",
			'de-de': "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges keine Attacken einsetzen.",
			'it-it': "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'pt-br': "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "The core on its chest absorbs energy emanating from the lands of the Galar region. This energy is what allows Eternatus to stay active.",
	},

	illustrator: "akagi",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857644,
				tcgplayer: 660406,
				cardtrader: 356855
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857644,
				tcgplayer: 660406,
				cardtrader: 356855
			}
		},
	],
}

export default card
