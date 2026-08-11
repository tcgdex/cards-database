import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [444],
	set: Set,

	name: {
		'en-us': "Cynthia's Gabite",
		'fr-fr': "Carmache de Cynthia",
		'de-de': "Cynthias Knarksel",
		'it-it': "Gabite di Camilla",
		'es-es': "Gabite de Cintia",
		'pt-br': "Gabite da Cíntia",
		'es-mx': "Gabite de Cynthia"
	},


	illustrator: "Taira Akitsu",

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Cynthia's Gible",
		'fr-fr': "Griknot de Cynthia",
		'de-de': "Cynthias Kaumalat",
		'it-it': "Gible di Camilla",
		'es-es': "Gible de Cintia",
		'pt-br': "Gible da Cíntia",
		'es-mx': "Gible de Cynthia"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Champion's Call",
			'fr-fr': "Appel de la Maîtresse",
			'de-de': "Ruf des Champs",
			'it-it': "Richiamo della Campionessa",
			'es-es': "Llamada de Campeones",
			'pt-br': "Chamado de Campeão",
			'es-mx': "Llamado de Campeones"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Cynthia's Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck un Pokémon de Cynthia, le montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Cynthias Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo un Pokémon di Camilla, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 Pokémon de Cintia, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por um Pokémon da Cíntia no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 Pokémon de Cynthia, mostrarlo y ponerlo en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Dragonslice",
			'fr-fr': "Draco-Tranche",
			'de-de': "Drachenschnetzler",
			'it-it': "Dragotrancia",
			'es-es': "Tajo Dragón",
			'pt-br': "Talhada do Dragão",
			'es-mx': "Corte Dracónico"
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825977,
				tcgplayer: 632911
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825977,
				tcgplayer: 632911
			}
		},
	],
}

export default card
