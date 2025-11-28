import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Eternatus",
		fr: "Éthernatos",
		es: "Eternatus",
		'es-mx': "Eternatus",
		de: "Endynalos",
		it: "Eternatus",
		pt: "Eternatus"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [890],
	hp: 150,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [890],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Shatter",
			fr: "Fracas",
			es: "Fragmentar",
			'es-mx': "Fragmentar",
			de: "Zertrümmern",
			it: "Frantumare",
			pt: "Estilhaçar"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			es: "Descarta 1 Estadio en juego.",
			'es-mx': "Descarta 1 Estadio en juego.",
			de: "Lege 1 Stadion im Spiel auf den Ablagestapel.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Descarte um Estádio em jogo."
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Power Rush",
			fr: "Ruée Puissante",
			es: "Envite Poderoso",
			'es-mx': "Embestida Poderosa",
			de: "Power-Ansturm",
			it: "Assalto Potente",
			pt: "Arremetida Poderosa"
		},

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't use attacks.",
			fr: "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede usar ataques durante tu próximo turno.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, durante tu próximo turno, este Pokémon no puede usar ataques.",
			de: "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges keine Attacken einsetzen.",
			it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857644
	}
}

export default card