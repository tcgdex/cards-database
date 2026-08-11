import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Vileplume GX",
		'fr-fr': "Rafflesia GX",
		'es-es': "Vileplume GX",
		'it-it': "Vileplume GX",
		'pt-br': "Vileplume GX",
		'de-de': "Giflor GX"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 240,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
	},

	stage: "Stage2",
	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fragrant Flower Garden",
				'fr-fr': "Jardin Fleuri Parfumé",
				'es-es': "Jardín de Flores Aromático",
				'it-it': "Giardino di Fiori Profumati",
				'pt-br': "Jardim de Flores Perfumadas",
				'de-de': "Duftender Blumengarten"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 30 damage from each of your Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à chacun de vos Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes curar 30 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi curare ciascuno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 30 pontos de dano de cada um dos seus Pokémon.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 30 Schadenspunkte bei jedem deiner Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Massive Bloom",
				'fr-fr': "Floraison Massive",
				'es-es': "Floración Masiva",
				'it-it': "Fioritura Massiccia",
				'pt-br': "Florescer Intenso",
				'de-de': "Gewaltiges Blühen"
			},
			effect: {
				'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte weniger mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "180-",

		},
		{
			cost: [
				"Grass",
			],

			name: {
				'en-us': "Allergy Explosion GX",
				'fr-fr': "Explosion Allergène GX",
				'es-es': "Explosión Alérgica GX",
				'it-it': "Esplosione Allergica GX",
				'pt-br': "Explosão Alérgica GX",
				'de-de': "Allergische Explosion GX"
			},

			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned, Paralyzed, and Poisoned. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Empoisonné et Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado, Paralizado y Quemado. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato, paralizzato e avvelenato. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado, Paralisado e Queimado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, paralysiert und vergiftet. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 410579,
		tcgplayer: 201610
	}
}

export default card
