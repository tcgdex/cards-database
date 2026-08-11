import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Stoutland",
		'fr-fr': "Mastouffe",
		'es-es': "Stoutland",
		'it-it': "Stoutland",
		'pt-br': "Stoutland",
		'de-de': "Bissbark"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		508,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien",
		'es-es': "Herdier",
		'it-it': "Herdier",
		'pt-br': "Herdier",
		'de-de': "Terribark"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite Off",
				'fr-fr': "Arrachage",
				'es-es': "Despedazar",
				'it-it': "Addentare",
				'pt-br': "Mordida Estraçalhante",
				'de-de': "Abbeißen"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, esse ataque causará 60 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wild Barking",
				'fr-fr': "Aboiement Sauvage",
				'es-es': "Ladrido Furioso",
				'it-it': "Abbaiare Furioso",
				'pt-br': "Latido Selvagem",
				'de-de': "Wildes Gebell"
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Esse ataque causa 20 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It rescues people stranded by blizzards in the mountains. Its shaggy fur shields it from the cold.",
	},

	thirdParty: {
		cardmarket: 281447,
		tcgplayer: 89573
	}
}

export default card
