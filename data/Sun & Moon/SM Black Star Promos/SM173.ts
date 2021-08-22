import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Jolteon GX",
		fr: "Voltali GX",
		es: "Jolteon GX",
		it: "Jolteon GX",
		pt: "Jolteon GX",
		de: "Blitza GX"
	},

	illustrator: "PLANETA Otani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 200,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrobullet",
				fr: "Électrojectile",
				es: "Electrobala",
				it: "Elettrodardo",
				pt: "Bala Elétrica",
				de: "Elektrokugel"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal",
				es: "Rayo de Cabeza",
				it: "Zuccalampo",
				pt: "Raio de Cabeça",
				de: "Kopf-Blitz"
			},

			damage: 110,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Swift Run GX",
				fr: "Course Rapide GX",
				es: "Fuga Súbita GX",
				it: "Corsa Lampo GX",
				pt: "Corrida Veloz GX",
				de: "Schneller Lauf GX"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Verhindere während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
