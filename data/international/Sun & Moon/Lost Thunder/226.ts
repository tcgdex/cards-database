import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Mimikyu GX",
		'fr-fr': "Mimiqui GX",
		'es-es': "Mimikyu GX",
		'it-it': "Mimikyu GX",
		'pt-br': "Mimikyu GX",
		'de-de': "Mimigma GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		778,
	],

	hp: 170,

	types: [
		"Fairy",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Perplex",
				'fr-fr': "Affolement",
				'es-es': "Desconcierto",
				'it-it': "Sconcerto",
				'pt-br': "Perplexo",
				'de-de': "Perplex"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Let’s Snuggle & Fall",
				'fr-fr': "Patati-Patatrac",
				'es-es': "Caída Amistosa",
				'it-it': "Gransacco di Botte",
				'pt-br': "Aconchegar e Cair",
				'de-de': "Knuddelkloppe und Fallen"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each damage counter on your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Dream Fear GX",
				'fr-fr': "Peur de Rêve GX",
				'es-es': "Temor Onírico GX",
				'it-it': "Terrore Onirico-GX",
				'pt-br': "Sonho Pavoroso GX",
				'de-de': "Traumangst GX"
			},
			effect: {
				'en-us': "Choose 1 of your opponent’s Benched Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into their deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Choisissez l’un des Pokémon de Banc de votre adversaire. Votre adversaire mélange ce Pokémon et toutes les cartes qui lui sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Elige 1 de los Pokémon en Banca de tu rival. Tu rival pone ese Pokémon y todas las cartas unidas a él en su baraja y las baraja todas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scegli uno dei Pokémon in panchina del tuo avversario. Il tuo avversario rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Escolha 1 dos Pokémon no Banco do seu oponente. Seu oponente embaralha aquele Pokémon e todas as cartas ligadas a ele no próprio baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wähle 1 Pokémon auf der Bank deines Gegners. Dein Gegner mischt jenes Pokémon und alle an es angelegten Karten in sein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365859,
		tcgplayer: 178970
	}
}

export default card
