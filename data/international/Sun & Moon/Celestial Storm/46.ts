import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Kyogre",
		'fr-fr': "Kyogre",
		'es-es': "Kyogre",
		'it-it': "Kyogre",
		'pt-br': "Kyogre",
		'de-de': "Kyogre"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dual Splash",
				'fr-fr': "Double Splash",
				'es-es': "Doble Salpicadura",
				'it-it': "Doppiosplash",
				'pt-br': "Esguicho Duplo",
				'de-de': "Doppelplatscher"
			},
			effect: {
				'en-us': "This attack does 30 damage to 2 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a due dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Grand Wave",
				'fr-fr': "Vague Imposante",
				'es-es': "Ola Colosal",
				'it-it': "Mastodonda",
				'pt-br': "Onda Grandiosa",
				'de-de': "Gewaltige Welle"
			},
			effect: {
				'en-us': "This Pokémon can’t use Grand Wave during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Vague Imposante pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Ola Colosal durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Mastodonda.",
				'pt-br': "Este Pokémon não poderá usar Onda Grandiosa durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Gewaltige Welle während deines nächsten Zuges nicht einsetzen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It is said to have widened the seas by causing downpours. It had been asleep in a marine trench.",
	},

	thirdParty: {
		cardmarket: 361293,
		tcgplayer: 170863
	}
}

export default card
