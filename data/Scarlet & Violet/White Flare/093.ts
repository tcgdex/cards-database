import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [616],
	set: Set,

	name: {
		en: "Shelmet",
		fr: "Escargaume",
		de: "Schnuthelm",
		it: "Shelmet",
		pt: "Shelmet",
		es: "Shelmet",
		'es-mx': "Shelmet"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Stimulated Evolution",
			fr: "Évolution Stimulée",
			de: "Stimulierte Entwicklung",
			it: "Evoluzione Stimolata",
			pt: "Evolução Estimulada",
			es: "Estímulo Evolución",
			'es-mx': "Evolución Inducida"
		},

		effect: {
			en: "If you have Karrablast in play, this Pokémon can evolve during your first turn or the turn you play it.",
			fr: "Si vous avez Carabing en jeu, ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			de: "Wenn du Laukaps im Spiel hast, kann sich dieses Pokémon während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			it: "Se hai Karrablast in gioco, questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			pt: "Se você tiver Karrablast em jogo, este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			es: "Si tienes a Karrablast en juego, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			'es-mx': "Si tienes a Karrablast en juego, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			de: "Abrupter Kopfstoß",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			es: "Bote Cabezazo",
			'es-mx': "Cabezazo Rebotante"
		},

		damage: 10
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836080
	}
}

export default card