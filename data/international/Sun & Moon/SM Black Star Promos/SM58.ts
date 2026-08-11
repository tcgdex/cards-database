import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Necrozma GX",
		'fr-fr': "Necrozma GX",
		'es-es': "Necrozma GX",
		'it-it': "Necrozma GX",
		'pt-br': "Necrozma GX",
		'de-de': "Necrozma GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		800,
	],

	hp: 180,

	types: [
		"Psychic",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Light’s End",
				'fr-fr': "Extinction des Feux",
				'es-es': "Fulgor Final",
				'it-it': "Fine della Luce",
				'pt-br': "Final da Luz",
				'de-de': "Lichtuntergang"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from Colorless Pokémon.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Colorless.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de Pokémon Colorless.",
				'it-it': "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon Colorless.",
				'pt-br': "Previne todo o dano causado a este Pokémon por ataques de Pokémon Colorless.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Colorless-Pokémon zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Prismatic Burst",
				'fr-fr': "Explosion Prismatique",
				'es-es': "Explosión Prisma",
				'it-it': "Prismaraffica",
				'pt-br': "Explosão Prismática",
				'de-de': "Prisma-Explosion"
			},
			effect: {
				'en-us': "Discard all Psychic Energy from this Pokémon. This attack does 60 more damage for each card you discarded in this way.",
				'fr-fr': "Défaussez toute l’Énergie Psychic de ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta todas las Energías Psychic de este Pokémon. Este ataque hace 60 puntos de daño más por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta tutte le Energie Psychic assegnate a questo Pokémon. Questo attacco infligge 60 danni in più per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte todas as Energias Psychic deste Pokémon. Este ataque causa 60 pontos de dano a mais para cada carta descartada desta forma.",
				'de-de': "Lege alle Psychic-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Black Ray GX",
				'fr-fr': "Rayon Noir GX",
				'es-es': "Rayo Negro GX",
				'it-it': "Raggio Nero GX",
				'pt-br': "Raio Preto GX",
				'de-de': "Schwarzer Strahl GX"
			},
			effect: {
				'en-us': "This attack does 100 damage to each of your opponent’s Pokémon-GX and Pokémon-EX. This damage isn’t affected by Weakness or Resistance. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 100 dégâts à chacun des Pokémon-GX et Pokémon-EX de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 100 puntos de daño a cada uno de los Pokémon-GX y Pokémon-EX de tu rival. Este daño no se ve afectado por Debilidad o Resistencia. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 100 danni a ciascuno dei Pokémon-GX e dei Pokémon-EX del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 100 pontos de dano a cada um dos Pokémon-GX e dos Pokémon-EX do seu oponente. Este dano não é afetado por Fraqueza ou Resistência (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt jedem Pokémon-GX und Pokémon-EX deines Gegners 100 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
}

export default card
