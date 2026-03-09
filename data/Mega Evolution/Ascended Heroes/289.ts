import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Steven's Metagross ex",
		fr: "Métalosse-ex de Pierre",
		es: "Metagross ex de Máximo",
		'es-mx': "Metagross ex de Steven",
		de: "Troys Metagross-ex",
		it: "Metagross-ex di Rocco",
		pt: "Metagross ex do Steven"
	},

	illustrator: "chibi",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 340,
	types: ["Metal"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "X-Boot",
			fr: "Trans-fer",
			es: "Arranque X",
			'es-mx': "Arranque X",
			de: "X-Booten",
			it: "Avvio X",
			pt: "Inicialização X"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Basic {P} Energy card, a Basic {M} Energy card, or 1 of each and attach them to your {P} Pokémon and {M} Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie {P} de base, une carte Énergie {M} de base, ou une de chaque et les attacher à vos Pokémon {P} et Pokémon {M} comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía {P} Básica, 1 carta de Energía {M} Básica o 1 de cada una y unirlas a tus Pokémon {P} y Pokémon {M} de la manera que desees. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 carta de Energía {P} Básica, 1 carta de Energía {M} Básica o 1 de cada una y unirlas a tus Pokémon {P} y Pokémon {M} de la manera que quieras. Después, baraja las cartas de tu mazo.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Basis-{P}-Energiekarte, 1 Basis-{M}-Energiekarte oder 1 von beiden durchsuchen und sie beliebig an deine {P}-Pokémon und {M}-Pokémon anlegen. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia base {P}, una carta Energia base {M} o entrambe e assegnarle ai tuoi Pokémon {P} e Pokémon {M} nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por uma carta de Energia {P} Básica, uma carta de Energia {M} Básica ou 1 de cada no seu baralho e ligá-las aos seus Pokémon {P} e Pokémon {M} como desejar. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Metal Stomp",
			fr: "Piétinement Métallique",
			es: "Pisotón Metálico",
			'es-mx': "Pisotón Metálico",
			de: "Metallstampfer",
			it: "Metalpestone",
			pt: "Pisada Metálica"
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676101,
		cardmarket: 869900
	}
}

export default card