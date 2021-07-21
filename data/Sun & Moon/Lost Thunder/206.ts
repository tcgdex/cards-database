import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Mimikyu-GX",
		fr: "Mimiqui-GX",
		es: "Mimikyu-GX",
		it: "Mimikyu-GX",
		pt: "Mimikyu-GX",
		de: "Mimigma-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				en: "Perplex",
				fr: "Affolement",
				es: "Desconcierto",
				it: "Sconcerto",
				pt: "Perplexo",
				de: "Perplex"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Let’s Snuggle & Fall",
				fr: "Patati-Patatrac",
				es: "Caída Amistosa",
				it: "Gransacco di Botte",
				pt: "Aconchegar e Cair",
				de: "Knuddelkloppe und Fallen"
			},
			effect: {
				en: "This attack does 30 more damage for each damage counter on your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Dream Fear GX",
				fr: "Peur de Rêve GX",
				es: "Temor Onírico GX",
				it: "Terrore Onirico-GX",
				pt: "Sonho Pavoroso GX",
				de: "Traumangst GX"
			},
			effect: {
				en: "Choose 1 of your opponent’s Benched Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into their deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Choisissez l’un des Pokémon de Banc de votre adversaire. Votre adversaire mélange ce Pokémon et toutes les cartes qui lui sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Elige 1 de los Pokémon en Banca de tu rival. Tu rival pone ese Pokémon y todas las cartas unidas a él en su baraja y las baraja todas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scegli uno dei Pokémon in panchina del tuo avversario. Il tuo avversario rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Escolha 1 dos Pokémon no Banco do seu oponente. Seu oponente embaralha aquele Pokémon e todas as cartas ligadas a ele no próprio baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wähle 1 Pokémon auf der Bank deines Gegners. Dein Gegner mischt jenes Pokémon und alle an es angelegten Karten in sein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],


	retreat: 1,



}

export default card
