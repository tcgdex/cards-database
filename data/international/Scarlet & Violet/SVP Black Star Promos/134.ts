import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [740],
	set: Set,

	name: {
		'en-us': "Crabominable",
		'fr-fr': "Crabominable",
		'es-es': "Crabominable",
		'it-it': "Crabominable",
		'pt-br': "Crabominable",
		'de-de': "Krawell"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'pt-br': "Crabrawler",
		'de-de': "Krabbox"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Food Prep",
			'fr-fr': "Préparation de Repas",
			'es-es': "Preparar la Comida",
			'it-it': "Preparacibo",
			'pt-br': "Preparação de Marmitas",
			'de-de': "Zubereitung"
		},

		effect: {
			'en-us': "Attacks used by this Pokémon cost {C} less for each Kofu card in your discard pile.",
			'fr-fr': "Les attaques utilisées par ce Pokémon coûtent {C} de moins pour chaque carte Kombu dans votre pile de défausse.",
			'es-es': "Los ataques usados por este Pokémon cuestan {C} menos por cada carta de Fuco en tu pila de descartes.",
			'it-it': "Il costo degli attacchi usati da questo Pokémon è ridotto di {C} per ogni carta Algaro nella tua pila degli scarti.",
			'pt-br': "Os ataques usados por este Pokémon custam {C} a menos para cada carta Álgaro na sua pilha de descarte.",
			'de-de': "Die Kosten der von diesem Pokémon eingesetzten Attacken verringern sich für jede Kombu-Karte in deinem Ablagestapel um {C}."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Haymaker",
			'fr-fr': "Coup de Poing Fracassant",
			'es-es': "Golpazo",
			'it-it': "Pugno Tremendo",
			'pt-br': "Golpe Arrasador",
			'de-de': "Schwinger"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Haymaker.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup de Poing Fracassant.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpazo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Pugno Tremendo.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Arrasador.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schwinger nicht einsetzen."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "KEIICHIRO ITO",
	description: {
		'en-us': "Though its punches are powerful, this Pokémon's movements are sluggish. It blows icy bubbles from its mouth to immobilize its opponents.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 785840,
				tcgplayer: 576972
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 785841,
				tcgplayer: 580335
			},
		}
	],
}

export default card
