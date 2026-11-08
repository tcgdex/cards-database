import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		663,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Heat Wave",
				'fr-fr': "Canicule",
				'es-es': "Onda Ígnea",
				'it-it': "Ondacalda",
				'pt-br': "Onda de Calor",
				'de-de': "Hitzewelle"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare Raid",
				'fr-fr': "Raid Flamboyant",
				'es-es': "Incursión Ígnea",
				'it-it': "Raid Fiammante",
				'pt-br': "Incursão de Chamas",
				'de-de': "Loderangriff"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon. This attack does 50 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez une Énergie de ce Pokémon. Cette attaque inflige 50 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Descarta 1 Energía de este Pokémon. Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon. Questo attacco infligge 50 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Descarte 1 Energia deste Pokémon. Este ataque causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Its tough wings don't allow fire to pass through them. A long time ago, firefighters' outfits were made from Talonflame wings.",
	},

	thirdParty: {
		cardmarket: 387992,
		tcgplayer: 194950
	}
}

export default card
