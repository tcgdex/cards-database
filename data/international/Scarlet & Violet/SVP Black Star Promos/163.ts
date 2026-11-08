import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		'en-us': "Cinderace ex",
		'fr-fr': "Pyrobut-ex",
		'es-es': "Cinderace ex",
		'it-it': "Cinderace-ex",
		'pt-br': "Cinderace ex",
		'de-de': "Liberlo-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'es-es': "Raboot",
		'it-it': "Raboot",
		'pt-br': "Raboot",
		'de-de': "Kickerlo"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flare Strike",
			'fr-fr': "Attaque Flamboyante",
			'es-es': "Impacto Ígneo",
			'it-it': "Colpo Fiammante",
			'pt-br': "Golpe de Chamas",
			'de-de': "Feuergeschoss"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Flare Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Attaque Flamboyante.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Impacto Ígneo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Fiammante.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Chamas.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Feuergeschoss nicht einsetzen."
		},

		damage: 280
	}, {
		cost: ["Fire", "Fighting", "Darkness"],

		name: {
			'en-us': "Garnet Volley",
			'fr-fr': "Volée de Grenats",
			'es-es': "Volea Granate",
			'it-it': "Cannonata di Granato",
			'pt-br': "Voleio de Granate",
			'de-de': "Granat-Volley"
		},

		effect: {
			'en-us': "This attack does 180 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 180 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 180 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 180 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 180 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 180 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 796939,
				tcgplayer: 596420
			},
		}
	],
}

export default card
