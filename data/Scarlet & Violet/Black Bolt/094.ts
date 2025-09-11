import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [588],
	set: Set,

	name: {
		en: "Karrablast",
		fr: "Carabing",
		de: "Laukaps",
		it: "Karrablast",
		pt: "Karrablast",
		es: "Karrablast",
		'es-mx': "Karrablast"
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
			en: "If you have Shelmet in play, this Pokémon can evolve during your first turn or the turn you play it.",
			fr: "Si vous avez Escargaume en jeu, ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			de: "Wenn du Schnuthelm im Spiel hast, kann sich dieses Pokémon während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			it: "Se hai Shelmet in gioco, questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			pt: "Se você tiver Shelmet em jogo, este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			es: "Si tienes a Shelmet en juego, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			'es-mx': "Si tienes a Shelmet en juego, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
			de: "Hornattacke",
			it: "Incornata",
			pt: "Ataque de Chifre",
			es: "Cornada",
			'es-mx': "Ataque Cuerno"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835919
	},

	variants: [{
		type: "holo",
		size: "standard",
		description: "Found in Booster Packs",
		set: "standard"
	}]
}

export default card