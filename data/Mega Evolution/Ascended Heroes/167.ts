import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Zangoose ex",
		fr: "Mangriff-ex",
		es: "Zangoose ex",
		'es-mx': "Zangoose ex",
		de: "Sengo-ex",
		it: "Zangoose-ex",
		pt: "Zangoose ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [335],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
			es: "Robo Pico",
			'es-mx': "Robo Punzante",
			de: "Stachelzug",
			it: "Battipesca",
			pt: "Comprada Espinhosa"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wild Scissors",
			fr: "Ciseaux Sauvages",
			es: "Tijeras Salvajes",
			'es-mx': "Tijeras Salvajes",
			de: "Wilde Scheren",
			it: "Forbici Feroci",
			pt: "Tesouras Selvagens"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675979,
		cardmarket: 869778
	}
}

export default card