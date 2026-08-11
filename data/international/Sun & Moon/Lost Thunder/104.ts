import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Meloetta",
		'fr-fr': "Meloetta",
		'es-es': "Meloetta",
		'it-it': "Meloetta",
		'pt-br': "Meloetta",
		'de-de': "Meloetta"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		648,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sing",
				'fr-fr': "Berceuse",
				'es-es': "Canto",
				'it-it': "Canto",
				'pt-br': "Canção",
				'de-de': "Gesang"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Miracle Harmony",
				'fr-fr': "Harmonie Miraculeuse",
				'es-es': "Armonía Milagrosa",
				'it-it': "Armonia Miracolosa",
				'pt-br': "Harmonia Milagrosa",
				'de-de': "Wunderharmonie"
			},
			effect: {
				'en-us': "Flip a coin for each of your Pokémon in play that has the Sing attack. This attack does 10 damage for each heads to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce pour chacun de vos Pokémon en jeu ayant l’attaque Berceuse. Cette attaque inflige 10 dégâts pour chaque côté face à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Lanza 1 moneda por cada uno de tus Pokémon en juego que tenga el ataque Canto. Este ataque hace 10 puntos de daño por cada cara a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Lancia una moneta per ogni tuo Pokémon in gioco che abbia l’attacco Canto. Questo attacco infligge 10 danni ogni volta che esce testa a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Jogue 1 moeda para cada um dos seus Pokémon em jogo que tiver o ataque Canção. Este ataque causa 10 pontos de dano para cada cara a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Wirf 1 Münze für jedes deiner Pokémon im Spiel, das die Attacke Gesang hat. Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte pro Kopf zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its melodies are sung with a special vocalization method that can control the feels of those who hear it.",
	},

	thirdParty: {
		cardmarket: 365741,
		tcgplayer: 178917
	}
}

export default card
