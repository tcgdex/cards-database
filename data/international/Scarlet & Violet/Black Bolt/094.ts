import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [588],
	set: Set,

	name: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
		'de-de': "Laukaps",
		'it-it': "Karrablast",
		'pt-br': "Karrablast",
		'es-es': "Karrablast",
		'es-mx': "Karrablast"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Illustration rare",
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
			'en-us': "If you have Shelmet in play, this Pokémon can evolve during your first turn or the turn you play it.",
			'fr-fr': "Si vous avez Escargaume en jeu, ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			'de-de': "Wenn du Schnuthelm im Spiel hast, kann sich dieses Pokémon während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			'it-it': "Se hai Shelmet in gioco, questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			'pt-br': "Se você tiver Shelmet em jogo, este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			'es-es': "Si tienes a Shelmet en juego, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			'es-mx': "Si tienes a Shelmet en juego, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Horn Attack",
			'fr-fr': "Koud'Korne",
			'de-de': "Hornattacke",
			'it-it': "Incornata",
			'pt-br': "Ataque de Chifre",
			'es-es': "Cornada",
			'es-mx': "Ataque Cuerno"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836096,
				tcgplayer: 642543
			}
		},
	]
}

export default card
