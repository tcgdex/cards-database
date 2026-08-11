import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [616],
	set: Set,

	name: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'de-de': "Schnuthelm",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'es-es': "Shelmet",
		'es-mx': "Shelmet"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Stimulated Evolution",
			'fr-fr': "Évolution Stimulée",
			'de-de': "Stimulierte Entwicklung",
			'it-it': "Evoluzione Stimolata",
			'pt-br': "Evolução Estimulada",
			'es-es': "Estímulo Evolución",
			'es-mx': "Evolución Inducida"
		},

		effect: {
			'en-us': "If you have Karrablast in play, this Pokémon can evolve during your first turn or the turn you play it.",
			'fr-fr': "Si vous avez Carabing en jeu, ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			'de-de': "Wenn du Laukaps im Spiel hast, kann sich dieses Pokémon während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			'it-it': "Se hai Karrablast in gioco, questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			'pt-br': "Se você tiver Karrablast em jogo, este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			'es-es': "Si tienes a Karrablast en juego, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			'es-mx': "Si tienes a Karrablast en juego, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'de-de': "Abrupter Kopfstoß",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'es-es': "Bote Cabezazo",
			'es-mx': "Cabezazo Rebotante"
		},

		damage: 10
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835915,
				tcgplayer: 642123
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835915,
				tcgplayer: 642123
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836505,
				tcgplayer: 642368
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836506,
				tcgplayer: 642296
			}
		},
	],
}

export default card
