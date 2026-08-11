import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [483],
	set: Set,

	name: {
		'en-us': "Dialga ex",
		'fr-fr': "Dialga-ex",
		'de-de': "Dialga-ex",
		'es-es': "Dialga ex",
		'it-it': "Dialga-ex",
		'pt-br': "Dialga ex"
	},

	suffix: "ex",
	illustrator: "PLANETA Tsuji",
	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Time Bellow",
			'fr-fr': "Appel Temporel",
			'de-de': "Zeitschrei",
			'es-es': "Bramido Tiempo",
			'it-it': "Ruggito Temporale",
			'pt-br': "Bramido Temporal"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Metal Blast",
			'fr-fr': "Explosion Métallique",
			'de-de': "Metallexplosion",
			'es-es': "Explosión Metálica",
			'it-it': "Metalbomba",
			'pt-br': "Explosão de Metal"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each {M} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {M} attachée à ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {M}-Energie 20 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía {M} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia {M} ligada a este Pokémon."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 810395,
				tcgplayer: 619587
			},
		}
	],
}

export default card
