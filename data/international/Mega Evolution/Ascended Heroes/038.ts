import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cinderace ex",
		'fr-fr': "Pyrobut-ex",
		'es-es': "Cinderace ex",
		'es-mx': "Cinderace ex",
		'de-de': "Liberlo-ex",
		'it-it': "Cinderace-ex",
		'pt-br': "Cinderace ex"
	},
	evolveFrom: {
		'en-us': "Raboot",
		'de-de': "Kickerlo",
		'es-es': "Raboot",
		'es-mx': "Raboot",
		'fr-fr': "Lapyro",
		'it-it': "Raboot",
		'pt-br': "Raboot",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [815],
	hp: 320,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flare Strike",
			'fr-fr': "Attaque Flamboyante",
			'es-es': "Impacto Ígneo",
			'es-mx': "Impacto Ígneo",
			'de-de': "Feuergeschoss",
			'it-it': "Colpo Fiammante",
			'pt-br': "Golpe de Chamas"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Flare Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Attaque Flamboyante.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Impacto Ígneo.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Impacto Ígneo.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Feuergeschoss nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Fiammante.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Chamas."
		},

		damage: 280
	}, {
		cost: ["Fire", "Fighting", "Darkness"],

		name: {
			'en-us': "Garnet Volley",
			'fr-fr': "Volée de Grenats",
			'es-es': "Volea Granate",
			'es-mx': "Volea Granate",
			'de-de': "Granat-Volley",
			'it-it': "Cannonata di Granato",
			'pt-br': "Voleio de Granate"
		},

		effect: {
			'en-us': "This attack does 180 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 180 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 180 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 180 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 180 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 180 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 180 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869649,
				tcgplayer: 675850
			}
		}
	],
}

export default card
