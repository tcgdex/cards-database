import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'en-us': "Lucario ex",
		'fr-fr': "Lucario-ex",
		'es-es': "Lucario ex",
		'it-it': "Lucario-ex",
		'pt-br': "Lucario ex",
		'de-de': "Lucario-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'pt-br': "Riolu",
		'it-it': "Riolu",
		'de-de': "Riolu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Low Sweep",
			'fr-fr': "Balayette",
			'es-es': "Puntapié",
			'it-it': "Calciobasso",
			'pt-br': "Movimento Baixo",
			'de-de': "Fußtritt"
		},

		damage: 60
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Aura Sphere",
			'fr-fr': "Aurasphère",
			'es-es': "Esfera Aural",
			'it-it': "Forzasfera",
			'pt-br': "Aura Esférica",
			'de-de': "Aurasphäre"
		},

		effect: {
			'en-us': "This attack also does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 703187,
				tcgplayer: 484396
			},
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 730157,
				tcgplayer: 513792
			}
		}
	],
}

export default card
