import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		en: "Steven's Metagross ex",
		fr: "Métalosse-ex de Pierre",
		de: "Troys Metagross-ex",
		it: "Metagross-ex di Rocco",
		es: "Metagross ex de Máximo",
		pt: "Metagross ex do Steven",
		'es-mx': "Metagross ex de Steven"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Metal"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "X-Boot",
			fr: "Trans-fer",
			de: "X-Booten",
			it: "Avvio X",
			es: "Arranque X",
			pt: "Inicialização X",
			'es-mx': "Arranque X"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Basic {P} Energy card, a Basic {M} Energy card, or 1 of each and attach them to your {P} Pokémon and {M} Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie {P} de base, une carte Énergie {M} de base, ou une de chaque et les attacher à vos Pokémon {P} et Pokémon {M} comme il vous plaît. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Basis-{P}-Energiekarte, 1 Basis-{M}-Energiekarte oder 1 von beiden durchsuchen und sie beliebig an deine {P}-Pokémon und {M}-Pokémon anlegen. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia base {P}, una carta Energia base {M} o entrambe e assegnarle ai tuoi Pokémon {P} e Pokémon {M} nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía {P} Básica, 1 carta de Energía {M} Básica o 1 de cada una y unirlas a tus Pokémon {P} y Pokémon {M} de la manera que desees. Después, baraja las cartas de tu baraja.",
			pt: "Uma vez durante o seu turno, você poderá procurar por uma carta de Energia {P} Básica, uma carta de Energia {M} Básica ou 1 de cada no seu baralho e ligá-las aos seus Pokémon {P} e Pokémon {M} como desejar. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 carta de Energía {P} Básica, 1 carta de Energía {M} Básica o 1 de cada una y unirlas a tus Pokémon {P} y Pokémon {M} de la manera que quieras. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Metal Stomp",
			fr: "Piétinement Métallique",
			de: "Metallstampfer",
			it: "Metalpestone",
			es: "Pisotón Metálico",
			pt: "Pisada Metálica",
			'es-mx': "Pisotón Metálico"
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card