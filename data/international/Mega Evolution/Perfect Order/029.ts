import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [702],

	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'es-mx': "Dedenne",
		'de-de': "Dedenne",
		'it-it': "Dedenne",
		'pt-br': "Dedenne"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Tail Generator",
			'fr-fr': "Générateur Caudal",
			'es-es': "Generador Cola",
			'es-mx': "Cola Generadora",
			'de-de': "Generatorschweif",
			'it-it': "Codageneratore",
			'pt-br': "Gerador de Cauda"
		},

		effect: {
			'en-us': "Choose Basic {L} Energy cards from your discard pile up to the amount of Energy attached to all of your opponent's Pokémon and attach them to your {L} Pokémon in any way you like.",
			'fr-fr': "Choisissez dans votre pile de défausse un nombre de cartes Énergie {L} de base inférieur ou égal à la quantité d'Énergies attachées à tous les Pokémon de votre adversaire, puis attachez-les à vos Pokémon {L} comme il vous plaît.",
			'es-es': "Elige una cantidad de cartas de Energía {L} Básica de tu pila de descartes igual o inferior a la cantidad de Energías unidas a cada uno de los Pokémon de tu rival, y únelas a tus Pokémon {L} de la manera que desees.",
			'es-mx': "Elige una cantidad de cartas de Energía {L} Básica de tu pila de descartes igual o inferior a la cantidad de Energías unidas a cada uno de los Pokémon de tu rival, y únelas a tus Pokémon {L} de la manera que quieras.",
			'de-de': "Wähle bis zu so viele Basis-{L}-Energiekarten aus deinem Ablagestapel, wie Energien an alle Pokémon deines Gegners angelegt sind, und lege sie beliebig an deine {L}-Pokémon an.",
			'it-it': "Scegli un numero di carte Energia base {L} dalla tua pila degli scarti uguale o inferiore al numero di Energie assegnate ai Pokémon del tuo avversario e assegnale ai tuoi Pokémon {L} nel modo che preferisci.",
			'pt-br': "Escolha cartas de Energia {L} Básica da sua pilha de descarte até a quantidade de Energias ligadas a todos os Pokémon do seu oponente e ligue-as aos seus Pokémon {L} como desejar."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'es-mx': "Impactrueno",
			'de-de': "Donnerschock",
			'it-it': "Tuonoshock",
			'pt-br': "Trovoada de Choques"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684412,
				cardmarket: 877442
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684412,
				cardmarket: 877442
			}
		}
	],

}

export default card
