import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		'en-us': "Mewtwo ex",
		'fr-fr': "Mewtwo-ex",
		'es-es': "Mewtwo ex",
		'it-it': "Mewtwo-ex",
		'pt-br': "Mewtwo ex",
		'de-de': "Mewtu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Transfer Charge",
			'fr-fr': "Charge Transférée",
			'es-es': "Carga Traspaso",
			'it-it': "Spostacarica",
			'pt-br': "Transferir Carga",
			'de-de': "Transferladevorgang"
		},

		effect: {
			'en-us': "Attach up to 2 Basic {P} Energy cards from your discard pile to your Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {P} de base de votre pile de défausse à vos Pokémon comme il vous plaît.",
			'es-es': "Une hasta 2 cartas de Energía {P} Básica de tu pila de descartes a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon fino a due carte Energia base {P} dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 2 cartas de Energia {P} Básica da sua pilha de descarte aos seus Pokémon como desejar.",
			'de-de': "Lege bis zu 2 Basis-{P}-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Photon Kinesis",
			'fr-fr': "Photon-Kinésie",
			'es-es': "Kinesia Fotónica",
			'it-it': "Cinèsi Fotonica",
			'pt-br': "Fotocinese",
			'de-de': "Photonenkinese"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each {P} Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {P} attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía {P} unida a cada uno de tus Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia {P} assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia {P} ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte {P}-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740549,
				tcgplayer: 523670,
				cardtrader: 265107
			}
		},
	],

	suffix: "ex",
	illustrator: "aky CG Works",

	
}

export default card
