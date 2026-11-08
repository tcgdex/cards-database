import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zangoose ex",
		'fr-fr': "Mangriff-ex",
		'es-es': "Zangoose ex",
		'es-mx': "Zangoose ex",
		'de-de': "Sengo-ex",
		'it-it': "Zangoose-ex",
		'pt-br': "Zangoose ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [335],
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spike Draw",
			'fr-fr': "Pique-Pioche",
			'es-es': "Robo Pico",
			'es-mx': "Robo Punzante",
			'de-de': "Stachelzug",
			'it-it': "Battipesca",
			'pt-br': "Comprada Espinhosa"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			'de-de': "Ziehe 2 Karten.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Wild Scissors",
			'fr-fr': "Ciseaux Sauvages",
			'es-es': "Tijeras Salvajes",
			'es-mx': "Tijeras Salvajes",
			'de-de': "Wilde Scheren",
			'it-it': "Forbici Feroci",
			'pt-br': "Tesouras Selvagens"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869778,
				tcgplayer: 675979
			}
		}
	],
}

export default card
