import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cynthia's Gabite",
		'fr-fr': "Carmache de Cynthia",
		'es-es': "Gabite de Cintia",
		'es-mx': "Gabite de Cynthia",
		'de-de': "Cynthias Knarksel",
		'it-it': "Gabite di Camilla",
		'pt-br': "Gabite da Cíntia"
	},

	evolveFrom: {
		'en-us': "Cynthia's Gible",
		'fr-fr': "Griknot de Cynthia",
		'es-es': "Gible de Cintia",
		'es-mx': "Gible de Cynthia",
		'de-de': "Cynthias Kaumalat",
		'it-it': "Gible di Camilla",
		'pt-br': "Gible da Cíntia",
	},

	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Champion's Call",
			'fr-fr': "Appel de la Maîtresse",
			'es-es': "Llamada de Campeones",
			'es-mx': "Llamado de Campeones",
			'de-de': "Ruf des Champs",
			'it-it': "Richiamo della Campionessa",
			'pt-br': "Chamado de Campeão"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Cynthia's Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck un Pokémon de Cynthia, le montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 Pokémon de Cintia, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 Pokémon de Cynthia, mostrarlo y ponerlo en tu mano. Después, baraja las cartas de tu mazo.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Cynthias Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo un Pokémon di Camilla, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por um Pokémon da Cíntia no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Dragonslice",
			'fr-fr': "Draco-Tranche",
			'es-es': "Tajo Dragón",
			'es-mx': "Corte Dracónico",
			'de-de': "Drachenschnetzler",
			'it-it': "Dragotrancia",
			'pt-br': "Talhada do Dragão"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "In rare cases, it molts and sheds its scales. Medicine containing its scales as an ingredient will make a weary body feel invigorated.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869721,
			tcgplayer: 675922
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870314,
			tcgplayer: 676941
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870313,
			tcgplayer: 677081
		}
	},
],
}

export default card
