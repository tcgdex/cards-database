import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		'en-us': "Steven's Metagross ex",
		'fr-fr': "Métalosse-ex de Pierre",
		'de-de': "Troys Metagross-ex",
		'it-it': "Metagross-ex di Rocco",
		'es-es': "Metagross ex de Máximo",
		'pt-br': "Metagross ex do Steven",
		'es-mx': "Metagross ex de Steven"
	},


	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Steven's Metang",
		'fr-fr': "Métang de Pierre",
		'de-de': "Troys Metang",
		'it-it': "Metang di Rocco",
		'es-es': "Metang de Máximo",
		'pt-br': "Metang do Steven",
		'es-mx': "Metang de Steven"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "X-Boot",
			'fr-fr': "Trans-fer",
			'de-de': "X-Booten",
			'it-it': "Avvio X",
			'es-es': "Arranque X",
			'pt-br': "Inicialização X",
			'es-mx': "Arranque X"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Basic {P} Energy card, a Basic {M} Energy card, or 1 of each and attach them to your {P} Pokémon and {M} Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie {P} de base, une carte Énergie {M} de base, ou une de chaque et les attacher à vos Pokémon {P} et Pokémon {M} comme il vous plaît. Mélangez ensuite votre deck.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Basis-{P}-Energiekarte, 1 Basis-{M}-Energiekarte oder 1 von beiden durchsuchen und sie beliebig an deine {P}-Pokémon und {M}-Pokémon anlegen. Mische anschließend dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia base {P}, una carta Energia base {M} o entrambe e assegnarle ai tuoi Pokémon {P} e Pokémon {M} nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía {P} Básica, 1 carta de Energía {M} Básica o 1 de cada una y unirlas a tus Pokémon {P} y Pokémon {M} de la manera que desees. Después, baraja las cartas de tu baraja.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por uma carta de Energia {P} Básica, uma carta de Energia {M} Básica ou 1 de cada no seu baralho e ligá-las aos seus Pokémon {P} e Pokémon {M} como desejar. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 carta de Energía {P} Básica, 1 carta de Energía {M} Básica o 1 de cada una y unirlas a tus Pokémon {P} y Pokémon {M} de la manera que quieras. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Metal Stomp",
			'fr-fr': "Piétinement Métallique",
			'de-de': "Metallstampfer",
			'it-it': "Metalpestone",
			'es-es': "Pisotón Metálico",
			'pt-br': "Pisada Metálica",
			'es-mx': "Pisotón Metálico"
		},

		damage: 200
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
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826019,
				tcgplayer: 630824
			}
		},
	],
}

export default card
